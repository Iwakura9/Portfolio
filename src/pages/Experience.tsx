import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "@/components/helpers/FadeIn";

const Experience = () => {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col space-y-6 px-6 pb-8 pt-6 sm:pb-12 sm:pt-12">
      <FadeIn yOffset={10} duration={0.4}>
        <button
          onClick={() => navigate("/")}
          className="flex w-fit cursor-pointer items-center gap-3 text-md font-light tracking-tight text-muted-foreground duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> Voltar ao início
        </button>
      </FadeIn>
      <FadeIn
        delay={0.1}
        yOffset={15}
        duration={0.5}
        className="flex flex-col gap-2"
      >
        <h1 className="text-2xl font-light tracking-tight sm:text-3xl">
          Experiência & Formação
        </h1>
        <p className="text-lg font-light text-muted-foreground">
          Minha trajetória acadêmica, atuação no PET Computação e participação
          em iniciativas de ensino e extensão.
        </p>
      </FadeIn>
      <div className="mt-6 flex flex-col gap-4">
        {experiences.map((experience, index) => (
          <FadeIn
            key={experience.slug}
            delay={0.15 + index * 0.05}
            yOffset={20}
          >
            <ExperienceCard {...experience} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
};

export default Experience;
