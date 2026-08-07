import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useTheme } from "next-themes";
import { ActivityCalendar, type Activity } from "react-activity-calendar";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/useI18n";

type StatsProps = {
  year?: "last" | "all" | number;
};

type ContributionResponse = {
  contributions: Activity[];
};

const Stats = ({ year: initialYear = new Date().getFullYear() }: StatsProps) => {
  const { resolvedTheme } = useTheme();
  const { t } = useI18n();
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  // Guarda apenas o fato do erro: a mensagem é resolvida no render, para
  // acompanhar a troca de idioma.
  const [hasError, setHasError] = useState(false);
  const [year, setYear] = useState<StatsProps["year"]>(initialYear);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  const activityDateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(t.stats.dateLocale, {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      }),
    [t.stats.dateLocale],
  );

  const formatActivityDate = useCallback(
    (date: string) => {
      const parsed = new Date(date);
      if (Number.isNaN(parsed.getTime())) {
        return date;
      }

      return activityDateFormatter.format(parsed);
    },
    [activityDateFormatter],
  );

  const yearOptions: number[] = Array.from(
    { length: Math.max(currentYear - 2024 + 1, 1) },
    (_, index) => currentYear - index,
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Abre o calendário já rolado até a data mais recente, após o layout.
    const scrollToEnd = requestAnimationFrame(() => {
      el.scrollLeft = el.scrollWidth;
    });

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        e.stopPropagation();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      cancelAnimationFrame(scrollToEnd);
      el.removeEventListener("wheel", onWheel);
    };
  }, [data]);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    const fetchContributions = async () => {
      try {
        if (!active) return;

        setLoading(true);
        setHasError(false);

        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${site.githubUser}?y=${year}`,
          { signal: controller.signal },
        );

        if (!res.ok) {
          throw new Error(`GitHub contributions API respondeu ${res.status}`);
        }

        const json = (await res.json()) as ContributionResponse;
        if (active) {
          setData(json.contributions);
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        if (active) {
          setHasError(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchContributions();

    return () => {
      active = false;
      controller.abort();
    };
  }, [year]);

  return (
    <section id="stats" className="w-full space-y-3">
      <div className="flex flex-col gap-3 pb-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-light tracking-tight sm:text-3xl">
              {t.stats.title}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm ">
          {yearOptions.map((option) => {
            const isActive = year === option;

            return (
              <button
                key={option}
                type="button"
                onClick={() => setYear(option)}
                className={cn(
                  "relative px-1.5 pb-1 font-normal tracking-tight text-muted-foreground transition-colors hover:text-foreground",
                  isActive &&
                    "text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-foreground",
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-border/80 bg-card p-4 pb-3 sm:p-6 sm:pb-4">
        {loading ? (
          <p className="text-sm text-muted-foreground">{t.stats.loading}</p>
        ) : hasError ? (
          <p className="text-sm text-muted-foreground">{t.stats.loadError}</p>
        ) : (
          <div className="space-y-3">
            <div
              ref={scrollRef}
              data-lenis-prevent="true"
              className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="min-w-max">
                <ActivityCalendar
                  data={data}
                  className="bg-card"
                  style={{ backgroundColor: "var(--card)" }}
                  colorScheme={
                    resolvedTheme === "dark"
                      ? "dark"
                      : resolvedTheme === "light"
                        ? "light"
                        : undefined
                  }
                  theme={{
                    light: [
                      "#ebedf0",
                      "#9be9a8",
                      "#40c463",
                      "#30a14e",
                      "#216e39",
                    ],
                    dark: [
                      "#212121",
                      "#0e4429",
                      "#006d32",
                      "#26a641",
                      "#39d353",
                    ],
                  }}
                  blockSize={11}
                  blockMargin={5}
                  blockRadius={3}
                  fontSize={12}
                  showWeekdayLabels
                  showColorLegend={false}
                  showTotalCount={false}
                  tooltips={{
                    activity: {
                      placement: "top",
                      withArrow: true,
                      offset: { mainAxis: 10 },
                      text: (activity) =>
                        t.stats.activityTooltip(
                          formatActivityDate(activity.date),
                          activity.count,
                        ),
                    },
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="text-xs font-light sm:text-sm">
                {t.stats.contributionsInYear(
                  data.reduce((sum, activity) => sum + activity.count, 0),
                  String(year),
                )}
              </span>
              <span>{t.stats.scrollHint}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Stats;
