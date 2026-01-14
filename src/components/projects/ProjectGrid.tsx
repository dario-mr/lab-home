import React from 'react';
import { motion } from 'framer-motion';
import { itemAnimation, listAnimation } from '@/constants/Animations';
import { ProjectCard } from '@/components/projects/ProjectCard';
import type { Project, ProjectMeta } from '@/types';

type Props = {
  title?: string;
  showCount?: boolean;
  projects: Project[];
  metaByPath: Record<string, ProjectMeta | undefined>;
  isLoading: boolean;
  animate?: boolean;
};

const fallbackMeta: ProjectMeta = { status: 'DOWN', version: null };

export function ProjectGrid({
  title,
  showCount = true,
  projects,
  metaByPath,
  isLoading,
  animate = false,
}: Props) {
  return (
    <div>
      {title && (
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          {showCount && <span className="text-sm opacity-60">{projects.length}</span>}
        </div>
      )}

      <motion.ul
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={animate ? listAnimation : undefined}
        initial={animate ? 'hidden' : false}
        animate={animate ? 'show' : undefined}
      >
        {projects.map((project) => (
          <motion.li key={project.path} variants={animate ? itemAnimation : undefined}>
            <ProjectCard
              project={project}
              meta={metaByPath[project.path] ?? fallbackMeta}
              isLoading={isLoading}
            />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
