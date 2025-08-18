import { useEffect, useState } from 'react';
import type { Project } from '@/types';
import { projectService } from 'components/projects/ProjectService';

export function useVersion(projects: Project[]) {
  // set all projects to "empty" version
  const [versionMap, setVersionMap] = useState<Record<string, string>>(
    () => Object.fromEntries(projects.map((p) => [p.infoPath, '...'])) as Record<string, string>
  );

  useEffect(() => {
    projects.forEach(async (p) => {
      const version = await projectService.getProjectVersion(p.infoPath);
      setVersionMap((v) => ({ ...v, [p.infoPath]: version }));
    });
  }, []);

  return versionMap;
}
