import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="w-full space-y-6">
      <div className="flex gap-3">
        <p className="text-2xl font-light tracking-tight sm:text-3xl">
          Experiência & Formação
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.slug} {...experience} />
        ))}
      </div>
      <div className="flex justify-center pt-6">
        <Button asChild size="lg" className="text-base">
          <Link to="/experiencia">
            Ver trajetória
            <ChevronRight strokeWidth={2.25} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ExperienceSection;
