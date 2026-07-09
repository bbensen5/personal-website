"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type Project = {
  title: string;
  image: string;
  alt: string;
  description: string;
  details: string;
  learned: string;
  tags: string[];
};

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const closeProject = useCallback(() => {
    if (isClosing) return;

    setIsClosing(true);

    closeTimerRef.current = window.setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
      closeTimerRef.current = null;
    }, 300);
  }, [isClosing]);

  const finishClosing = useCallback(() => {
    if (!isClosing) return;

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setSelectedProject(null);
    setIsClosing(false);
  }, [isClosing]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProject();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeProject, selectedProject]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-foreground/15 bg-offset text-left transition-[border-color,box-shadow] duration-300 ease-out hover:border-highlight hover:shadow-[0_0_24px_rgba(131,154,255,0.16)] active:border-highlight active:shadow-[0_0_24px_rgba(131,154,255,0.16)]"
            onClick={() => {
              if (closeTimerRef.current) {
                window.clearTimeout(closeTimerRef.current);
                closeTimerRef.current = null;
              }
              setIsClosing(false);
              setSelectedProject(project);
            }}
            aria-label={`View details for ${project.title}`}
          >
            <div className="flex h-48 items-center justify-center overflow-hidden bg-background">
              <Image
                src={project.image}
                alt={project.alt}
                width={520}
                height={320}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-active:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="text-sm font-light leading-6 text-foreground/80">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-background px-3 py-1 text-xs text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject &&
        createPortal(
          <div
            className={`fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm motion-reduce:animate-none sm:p-8 ${
              isClosing
                ? "animate-[project-backdrop-out_260ms_ease-in_both]"
                : "animate-[project-backdrop-in_180ms_ease-out_both]"
            }`}
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeProject();
            }}
          >
            <article
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              className={`relative max-h-[90vh] w-full max-w-3xl origin-center overflow-y-auto rounded-lg border border-highlight/45 bg-offset shadow-[0_0_40px_rgba(131,154,255,0.2)] motion-reduce:animate-none ${
                isClosing
                  ? "animate-[project-dialog-out_260ms_cubic-bezier(0.7,0,0.84,0)_both]"
                  : "animate-[project-dialog-in_260ms_cubic-bezier(0.16,1,0.3,1)_both]"
              }`}
              onAnimationEnd={(event) => {
                if (event.currentTarget === event.target) finishClosing();
              }}
            >
              <button
                type="button"
                className="absolute top-3 right-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-foreground/20 bg-background/90 text-2xl leading-none text-foreground transition-colors hover:border-highlight hover:text-highlight active:border-highlight active:text-highlight"
                onClick={closeProject}
                aria-label="Close project details"
              >
                &times;
              </button>

              <div className="relative h-56 overflow-hidden bg-background sm:h-72">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-6 p-6 sm:p-8">
                <div className="flex flex-col gap-3">
                  <h3
                    id="project-dialog-title"
                    className="font-[family-name:var(--font-display)] text-2xl font-bold text-highlight sm:text-3xl"
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="font-light leading-7 text-foreground/85">
                    {selectedProject.details}
                  </p>
                </div>

                <div>
                  <h4 className="mb-2 font-medium text-foreground">What I learned</h4>
                  <p className="text-sm font-light leading-6 text-foreground/75">
                    {selectedProject.learned}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-background px-3 py-1 text-xs text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>,
          document.body,
        )}
    </>
  );
}
