import { lazy, Suspense, type ReactNode } from "react";
import Hero from "./components/Hero";
import SkillSection from "./components/SkillSection";
import { FadeIn } from "./components/helpers/FadeIn";

const ProjectSection = lazy(() => import("./components/ProjectSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const Stats = lazy(() => import("./components/Stats"));
const QuoteSection = lazy(() => import("./components/QuoteSection"));

const LazySection = ({
  children,
  minHeight = "h-40",
}: {
  children: ReactNode;
  minHeight?: string;
}) => (
  <Suspense
    fallback={<div className={`${minHeight} animate-pulse rounded-xl bg-muted/20`} />}
  >
    <FadeIn>{children}</FadeIn>
  </Suspense>
);

const App = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
      <div className="relative z-10 flex flex-col flex-1">
        <main className="mx-auto flex w-full max-w-3xl flex-col gap-20 px-6 pb-6 sm:gap-20 sm:pb-20 overflow-hidden">
          <Hero />
          <FadeIn>
            <SkillSection />
          </FadeIn>
          <LazySection>
            <ProjectSection />
          </LazySection>
          <LazySection>
            <ExperienceSection />
          </LazySection>
          <LazySection>
            <Stats />
          </LazySection>
          <LazySection minHeight="h-24">
            <QuoteSection />
          </LazySection>
        </main>
      </div>
    </div>
  );
};

export default App;
