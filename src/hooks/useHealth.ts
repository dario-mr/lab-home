import { useEffect, useState } from 'react';
import type { Project, Status } from '../types';
import { projectService } from '../components/projects/ProjectService';

export function useHealth(projects: Project[]) {
  // set all projects to "loading" state
  const [healthMap, setHealthMap] = useState<Record<string, Status>>(
    () => Object.fromEntries(projects.map((p) => [p.healthPath, '...'])) as Record<string, Status>
  );

  useEffect(() => {
    projects.forEach(async (p) => {
      const status = await projectService.getProjectHealth(p.healthPath);
      setHealthMap((h) => ({ ...h, [p.healthPath]: status }));
    });
  }, []);

  return healthMap;
}
