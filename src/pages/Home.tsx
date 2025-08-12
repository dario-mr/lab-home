import React from 'react';
import { projects } from '../data/projects';
import { useHealth } from '../hooks/useHealth';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { motion, stagger, type Variants } from 'framer-motion';

const listAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: stagger(0.05),
    },
  },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export default function Home() {
  const health = useHealth(projects);

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
              <ProjectCard project={project} status={health[project.health]} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </main>
  );
}
