import React from 'react';
import { projects } from '@/data/projects';
import { Header } from '@/components/header/Header';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { useMetadata } from '@/hooks/useMetadata';

export default function Home() {
  const enabledProjects = projects.filter((project) => project.enabled);
  const disabledProjects = projects.filter((project) => !project.enabled);
  const metaPerProject = useMetadata(enabledProjects);

  const upProjects = enabledProjects.filter(
    (project) => metaPerProject.meta[project.path]?.status === 'UP'
  );
  const downProjects = enabledProjects.filter(
    (project) => metaPerProject.meta[project.path]?.status !== 'UP'
  );

  return (
    <main className="min-h-dvh bg-base-100">
      <div className="container mx-auto px-4 py-6">
        <Header title="Dario's Lab" githubUrl="https://github.com/dario-mr" />

        {metaPerProject.isLoading ? (
          <ProjectGrid
            title="Up"
            projects={enabledProjects}
            metaByPath={metaPerProject.meta}
            isLoading={metaPerProject.isLoading}
            animate={true}
          />
        ) : (
          <div className="space-y-8">
            {upProjects.length > 0 && (
              <ProjectGrid
                title="Up"
                projects={upProjects}
                metaByPath={metaPerProject.meta}
                isLoading={false}
              />
            )}
            {downProjects.length > 0 && (
              <ProjectGrid
                title="Down"
                projects={downProjects}
                metaByPath={metaPerProject.meta}
                isLoading={false}
              />
            )}
            {disabledProjects.length > 0 && (
              <ProjectGrid
                title="Disabled"
                projects={disabledProjects}
                metaByPath={metaPerProject.meta}
                isLoading={false}
              />
            )}
          </div>
        )}
      </div>
    </main>
  );
}
