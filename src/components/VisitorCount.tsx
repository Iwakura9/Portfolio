import { getOrCreateFingerprint } from "@/lib/fingerprint";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { useI18n } from "@/i18n/useI18n";

const VisitorCount = () => {
  const { t } = useI18n();
  const [count, setCount] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const track = async () => {
      const visitor_id = getOrCreateFingerprint();

      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visitor_id }),
        });

        if (!res.ok) {
          return;
        }

        const data = (await res.json()) as { count?: number; total?: number };
        if (active && typeof data.count === "number") {
          setCount(data.count);
        }
        if (active && typeof data.total === "number") {
          setTotal(data.total);
        }
      } catch {
        // Keep the footer quiet if the API is unavailable.
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    track();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="flex w-full items-center justify-center rounded-lg sm:justify-start">
      {loading ? (
        <div className="flex w-full max-w-full items-center justify-center gap-2" aria-busy="true">
          <Skeleton className="size-4 rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-24 sm:w-28" />
            <Skeleton className="h-3 w-16 sm:w-20" />
          </div>
        </div>
      ) : count === null ? (
        <p className="text-sm text-muted-foreground">
          <span className="inline-block align-middle tracking-[0.35em]">
            ...
          </span>
        </p>
      ) : (
        <div className="flex w-full items-center justify-center gap-2 sm:justify-start">
          <UserRound size={17} className="shrink-0 text-muted-foreground" />
          <p className="flex min-w-0 flex-wrap items-center justify-center gap-x-1 gap-y-0.5 text-center text-base leading-tight text-muted-foreground sm:justify-start sm:text-left">
            <span>{t.visitors.before}</span>
            <span className="whitespace-nowrap text-lg font-light leading-none text-foreground tabular-nums sm:text-xl">
              {count}
            </span>
            <span className="whitespace-nowrap text-sm font-light leading-none text-muted-foreground tabular-nums sm:text-base">
              {total !== null ? `/ ${total}` : ""}
            </span>
            <span className="whitespace-nowrap text-base">
              {t.visitors.after}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default VisitorCount;
