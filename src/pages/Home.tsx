import React from 'react';
import { projects } from '@/data/projects';
import { Header } from '@/components/header/Header';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { useMetadata } from '@/hooks/useMetadata';

export default function Home() {
  const metaPerProject = useMetadata(projects);

  const upProjects = projects.filter(
    (project) => metaPerProject.meta[project.path]?.status === 'UP'
  );
  const downProjects = projects.filter(
    (project) => metaPerProject.meta[project.path]?.status !== 'UP'
  );

  return (
    <main className="min-h-dvh bg-base-100">
      <div className="container mx-auto px-4 py-6">
        <Header title="Dario's Lab" githubUrl="https://github.com/dario-mr" />

        {metaPerProject.isLoading ? (
          <ProjectGrid
            projects={projects}
            metaByPath={metaPerProject.meta}
            isLoading={metaPerProject.isLoading}
            animate
          />
        ) : (
          <div className="space-y-8">
            <ProjectGrid
              title="Up"
              projects={upProjects}
              metaByPath={metaPerProject.meta}
              isLoading={false}
            />
            <ProjectGrid
              title="Down"
              projects={downProjects}
              metaByPath={metaPerProject.meta}
              isLoading={false}
            />
          </div>
        )}
      </div>
    </main>
  );
}
