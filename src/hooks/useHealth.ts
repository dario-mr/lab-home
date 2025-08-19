import { useEffect, useState } from 'react';
import type { Project, Status } from '@/types';
import { projectService } from 'components/projects/ProjectService';

// undefined = loading
type HealthMap = Record<string, Status | undefined>;

export function useHealth(projects: Project[]) {
  // set all projects to "loading" state
  const [healthMap, setHealthMap] = useState<HealthMap>(
    () => Object.fromEntries(projects.map((p) => [p.healthPath, undefined])) as HealthMap
  );

  useEffect(() => {
    projects.forEach(async (p) => {
      const status = await projectService.getProjectHealth(p.healthPath);
      setHealthMap((h) => ({ ...h, [p.healthPath]: status }));
    });
  }, []);

  return healthMap;
}
