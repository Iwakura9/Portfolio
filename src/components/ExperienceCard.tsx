import type { Experience } from "@/data/experience";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";

const ExperienceCard = ({
  slug,
  title,
  organization,
  description,
  period,
  location,
  tags,
}: Experience) => {
  const { pick } = useI18n();

  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden rounded-xl border border-dashed border-border/80 bg-card p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
          {pick(period)}
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground sm:text-xs">
          <MapPin size={12} className="sm:size-[14px]" />
          {pick(location)}
        </div>
      </div>
      <Link
        to={`/experiencia/${slug}`}
        className="group mt-1 flex w-full flex-row items-start justify-between gap-3 sm:gap-4"
      >
        <span className="text-lg font-light text-foreground decoration-1 underline-offset-4 transition-all duration-200 group-hover:underline sm:text-xl">
          {pick(title)}
        </span>
        <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      </Link>
      <p className="text-sm font-light text-foreground/80">
        {pick(organization)}
      </p>
      <p className="line-clamp-2 text-sm font-light leading-relaxed text-muted-foreground sm:line-clamp-3">
        {pick(description)}
      </p>
      <div className="mt-1 flex flex-wrap gap-2">
        {pick(tags).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-dashed border-border/70 bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
