import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

/** Formato produzido por `generateFingerprint` em `src/lib/fingerprint.ts`. */
const VISITOR_ID_PATTERN = /^[a-f0-9]{8,64}$/i;

/** Resposta neutra: o rodapé simplesmente não mostra a contagem. */
const EMPTY = { count: null, total: null };

/** Lê o total de linhas do header `content-range` ("0-0/42"). */
function readTotal(res: Response): number | null {
  const total = Number(res.headers.get("content-range")?.split("/")[1]);
  return Number.isFinite(total) ? total : null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error("visitors api error: missing Supabase configuration");
    return res.status(200).json(EMPTY);
  }

  const visitor_id: unknown = req.body?.visitor_id;

  if (typeof visitor_id !== "string" || !VISITOR_ID_PATTERN.test(visitor_id)) {
    return res.status(200).json(EMPTY);
  }

  const authHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    apiKey: SUPABASE_SERVICE_ROLE_KEY,
  };

  try {
    const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/visitors`, {
      method: "POST",
      headers: { ...authHeaders, Prefer: "resolution=ignore-duplicates" },
      body: JSON.stringify({ visitor_id }),
    });

    if (!insertRes.ok && insertRes.status !== 409) {
      console.error(
        "visitors api error: failed to record visitor",
        await insertRes.text(),
      );
    }

    // Linha do próprio visitante, para saber desde quando ele conta.
    const selfRes = await fetch(
      `${SUPABASE_URL}/rest/v1/visitors?select=created_at&visitor_id=eq.${encodeURIComponent(visitor_id)}&limit=1`,
      { headers: authHeaders },
    );

    if (!selfRes.ok) {
      console.error(
        "visitors api error: failed to read visitor",
        await selfRes.text(),
      );
      return res.status(200).json(EMPTY);
    }

    const [self] = (await selfRes.json()) as Array<{ created_at?: string }>;

    // Total de visitantes. `Range: 0-0` mantém a resposta em uma linha:
    // o número vem do header, não do corpo.
    const totalRes = await fetch(
      `${SUPABASE_URL}/rest/v1/visitors?select=visitor_id`,
      { headers: { ...authHeaders, Prefer: "count=exact", Range: "0-0" } },
    );

    if (!totalRes.ok) {
      console.error(
        "visitors api error: failed to read visitor count",
        await totalRes.text(),
      );
      return res.status(200).json(EMPTY);
    }

    const total = readTotal(totalRes);

    if (!self?.created_at) {
      return res.status(200).json({ count: null, total });
    }

    // Posição ordinal = quantos vieram antes + 1, contado no banco em vez de
    // baixar a tabela inteira a cada visita.
    const earlierRes = await fetch(
      `${SUPABASE_URL}/rest/v1/visitors?select=visitor_id&created_at=lt.${encodeURIComponent(self.created_at)}`,
      { headers: { ...authHeaders, Prefer: "count=exact", Range: "0-0" } },
    );

    if (!earlierRes.ok) {
      console.error(
        "visitors api error: failed to read visitor position",
        await earlierRes.text(),
      );
      return res.status(200).json({ count: null, total });
    }

    const earlier = readTotal(earlierRes);

    return res.status(200).json({
      count: earlier === null ? null : earlier + 1,
      total,
    });
  } catch (error) {
    console.error("visitors api error:", error);
    return res.status(200).json(EMPTY);
  }
}
