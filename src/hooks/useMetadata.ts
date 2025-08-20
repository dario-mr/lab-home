import { useEffect, useState } from 'react';
import type { Project, ProjectMeta } from '@/types';
import { projectService } from 'components/projects/ProjectService';

type ProjectMetaMap = Record<string, ProjectMeta>;

export function useMetadata(projects: Project[]) {
  // initialize all projects to loading state
  const [meta, setMeta] = useState<ProjectMetaMap>(() =>
    Object.fromEntries(projects.map((p) => [p.path, { isLoading: true }]))
  );

  useEffect(() => {
    const perProject = projects.map((project) =>
      Promise.all([
        projectService.getProjectHealth(project.healthPath),
        projectService.getProjectVersion(project.infoPath),
      ]).then(([status, version]): [string, ProjectMeta] => [
        project.path,
        { isLoading: false, status, version },
      ])
    );

    Promise.all(perProject).then((entries) => {
      setMeta(Object.fromEntries(entries));
    });
  }, []);

  return meta;
}
