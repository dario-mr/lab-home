import { useEffect, useState } from 'react';
import type { Project } from '@/types';
import { projectService } from 'components/projects/ProjectService';

// undefined = loading, null = error
type VersionMap = Record<string, string | null | undefined>;

export function useVersion(projects: Project[]) {
  // set all projects to "empty" version
  const [versionMap, setVersionMap] = useState<VersionMap>(
    () => Object.fromEntries(projects.map((p) => [p.infoPath, undefined])) as VersionMap
  );

  useEffect(() => {
    projects.forEach(async (p) => {
      const version = await projectService.getProjectVersion(p.infoPath);
      setVersionMap((v) => ({ ...v, [p.infoPath]: version }));
    });
  }, []);

  return versionMap;
}
