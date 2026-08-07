import { experiences } from "@/data/experience";
import { ChevronLeft, MapPin, Tag } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { FadeIn } from "@/components/helpers/FadeIn";
import { useI18n } from "@/i18n/useI18n";

const ExperienceDetail = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { t, pick } = useI18n();
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    return (
      <div className="flex min-h-screen items-center justify-center text-xl text-muted-foreground">
        {t.experience.notFound}
      </div>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col space-y-6 px-6 pb-8 pt-6 sm:pb-24 sm:pt-12">
      <FadeIn yOffset={10} duration={0.4}>
        <button
          onClick={() => navigate("/experiencia")}
          className="flex w-fit cursor-pointer items-center gap-3 text-md font-light tracking-tight text-muted-foreground duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> {t.experience.back}
        </button>
      </FadeIn>

      <div className="flex flex-col gap-6">
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {pick(experience.period)}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <MapPin size={12} />
              {pick(experience.location)}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-light leading-tight tracking-tight sm:text-4xl">
            {pick(experience.title)}
          </h1>
          <p className="mt-2 text-base font-light text-foreground/80 sm:text-lg">
            {pick(experience.organization)}
          </p>
          <p className="mt-4 text-lg font-light text-muted-foreground sm:text-xl">
            {pick(experience.description)}
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={14} className="shrink-0 text-muted-foreground" />
            {pick(experience.tags).map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-dashed border-border/70 bg-card px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <hr className="border-dashed border-border/60" />
        </FadeIn>

        <FadeIn delay={0.25}>
          <h2 className="mb-4 text-xl font-light tracking-tight sm:text-2xl">
            {t.experience.highlights}
          </h2>
          <ul className="list-disc space-y-3 pl-5 font-light text-muted-foreground">
            {pick(experience.highlights).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </main>
  );
};

export default ExperienceDetail;
