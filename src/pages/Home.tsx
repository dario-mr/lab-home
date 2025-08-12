import React from 'react';
import { projects } from '../data/projects';
import { useHealth } from '../hooks/useHealth';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';

export default function Home() {
  const health = useHealth(projects);

  return (
    <main className="min-h-dvh bg-base-100">
      <div className="container mx-auto px-4 py-6">
        <Header title="Dario's Lab" githubUrl="https://github.com/dario-mr" />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.path}>
              <ProjectCard project={project} status={health[project.health]} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
