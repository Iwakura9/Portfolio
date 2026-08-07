import { BadgeCheck, BookText, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import ThemedIcon from "./helpers/ThemedIcon";
import { skills } from "@/data/tech";
import { socials } from "@/data/socials";
import { motion } from "framer-motion";
import { externalLinkProps } from "@/lib/links";
import { containerVariants, itemVariants } from "@/lib/motionVariants";
import resumeUrl from "@/assets/curriculo.pdf?url";
import { useI18n } from "@/i18n/useI18n";

const Hero = () => {
  const { t, pick } = useI18n();

  return (
    <section
      className="flex flex-col justify-center pt-32 pb-20 sm:pt-22 sm:pb-12"
      id="home"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-5 sm:space-y-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center mb-8 gap-[14px] sm:gap-[20px]"
        >
          <div className="flex shrink-0 items-center justify-center">
            {/* avatar */}
            <img
              src={`${import.meta.env.BASE_URL}assets/me.jpeg`}
              alt={t.hero.avatarAlt}
              className="block h-35 w-35 shrink-0 rounded-full border-2 border-border object-cover object-center p-1 shadow-sm sm:h-40 sm:w-40"
            />
          </div>
          <div className="flex h-full flex-col justify-center gap-2 sm:gap-3">
            <h1 className="flex items-center gap-1 text-right text-2xl font-light tracking-tight sm:text-2xl md:text-3xl">
              Gabriel Cavalcante
              <span className="text-background">
                <BadgeCheck color="currentColor" fill="#3b82f6" size={28} />
              </span>
            </h1>
            <div className="flex items-start gap-2.5 sm:gap-3">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  {...externalLinkProps(social.href)}
                  className="border-0 hover:opacity-80 transition-opacity"
                >
                  <ThemedIcon
                    item={social}
                    alt={pick(social.name)}
                    className="h-6 w-6 rounded p-0.5 sm:h-7 sm:w-7"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-5 sm:space-y-6">
          <h1 className="max-w-full text-[1.7rem] font-normal tracking-tight leading-tight sm:text-[2.05rem] md:text-[2.15rem]">
            {t.hero.headline} {" "}
            <span className="text-[0.95em] font-light text-muted-foreground sm:text-[0.96em]">
              {t.hero.headlineAccent}
            </span>
          </h1>
          <p className="text-base font-light leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {t.hero.bioBefore}{" "}
            <span className="inline items-center gap-2 align-middle">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="bg-card ml-1 inline-flex items-center gap-1.5 rounded-md border border-dashed px-2 py-1 text-xs text-foreground sm:px-2.5 sm:text-sm transition-colors hover:border-foreground/30"
                >
                  <ThemedIcon
                    item={skill}
                    alt={skill.name}
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                  />
                  {skill.name}
                </span>
              ))}
            </span>{" "}
             {t.hero.bioAfter}
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <a href="/contact">
              <Button
                size="lg"
              >
                {t.hero.contact}
                <ChevronRight strokeWidth={2.25} />
              </Button>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-card text-foreground border-dashed cursor-pointer"
              >
                {t.hero.resume}
                <BookText />
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
