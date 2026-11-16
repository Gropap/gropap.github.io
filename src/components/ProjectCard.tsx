import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  viewDemoLabel: string;
  viewCodeLabel: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  demoUrl,
  viewDemoLabel,
  viewCodeLabel,
}: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-cyan-500/20 bg-[#101d2d] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
      {/* Project Image Placeholder */}

      {/* Project Image */}
      <div className="relative h-48 bg-linear-to-br from-[#102c40] to-[#061221]">
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>

        <p className="mt-4 leading-7 text-slate-400">{description}</p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-lg bg-[#061221] px-3 py-2 text-sm text-cyan-400">
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        {(demoUrl || githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3 border-t border-cyan-500/20 pt-5">
            {/* Live Demo */}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400"
              >
                <FaExternalLinkAlt />
                {viewDemoLabel}
              </a>
            )}

            {/* GitHub */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-cyan-500/40 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaGithub />
                {viewCodeLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
