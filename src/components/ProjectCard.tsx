import { LuGithub } from "react-icons/lu";
import { BiLink } from "react-icons/bi";
import ThemedIcon from "./helpers/ThemedIcon";
import type { Project } from "@/data/projects";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";

const ProjectCard = ({
  slug,
  name,
  imgSrc,
  description,
  techStack,
  liveLink,
  githubLink,
}: Project) => {
  const { t, pick } = useI18n();
  const projectName = pick(name);

  return (
    <div className="flex flex-col gap-2 bg-card border border-dashed border-border/80 p-2 rounded-xl w-full overflow-hidden">
      <div className="group/image rounded-lg overflow-hidden">
        <img
          src={imgSrc}
          alt={projectName}
          loading="lazy"
          className="aspect-video rounded-lg border border-border/80 w-full object-cover transition-all duration-500 ease-out group-hover/image:blur-xs"
        />
      </div>

      <div className="px-2 mt-4">
        <div className="text-xl font-light tracking-tight">{projectName}</div>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {pick(description)}
        </p>
      </div>

      <div className="flex items-center gap-4 px-2 mt-4">
        {techStack.map((tech) => (
          <ThemedIcon
            key={tech.name}
            item={tech}
            alt={tech.name}
            className="w-5 h-5"
          />
        ))}
      </div>

      <div className="w-full h-px bg-border mt-2 mb-1" />

      <div className="flex items-center justify-between mt-1 px-2 pb-2 ">
        <div className="flex items-center gap-3">
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              aria-label={t.a11y.openProject(projectName)}
            >
              <BiLink className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </a>
          ) : null}
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label={t.a11y.viewSource(projectName)}
            >
              <LuGithub className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </a>
          ) : null}
        </div>
        <p className="text-xs font-mono text-muted-foreground hover:text-foreground cursor-pointer transition-colors uppercase tracking-widest">
          <Link to={`/projects/${slug}`}>{t.projects.details}</Link>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
