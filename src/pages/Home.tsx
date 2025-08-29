import React from 'react';
import { projects } from '@/data/projects';
import { Header } from '@/components/header/Header';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { motion } from 'framer-motion';
import { itemAnimation, listAnimation } from '@/constants/Animations';
import { useMetadata } from '@/hooks/useMetadata';

export default function Home() {
  const metaPerProject = useMetadata(projects);

  return (
    <main className="min-h-dvh bg-base-100">
      <div className="container mx-auto px-4 py-6">
        <Header title="Dario's Lab" githubUrl="https://github.com/dario-mr" />

        <motion.ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={listAnimation}
          initial={'hidden'}
          animate={'show'}
        >
          {projects.map((project) => (
            <motion.li key={project.path} variants={itemAnimation}>
              <ProjectCard
                key={project.path}
                project={project}
                meta={metaPerProject.meta[project.path]}
                isLoading={metaPerProject.isLoading}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </main>
  );
}
