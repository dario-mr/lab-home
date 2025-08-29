import { useQuery } from '@tanstack/react-query';
import type { Project, ProjectMeta } from '@/types';
import { projectService } from 'components/projects/ProjectService';

type ProjectMetaMap = Record<string, ProjectMeta>;

export function useMetadata(projects: Project[]) {
  const { data, isFetching, error } = useQuery<ProjectMetaMap>({
    queryKey: ['projects-meta', projects.map((p) => p.path)],
    enabled: projects.length > 0,
    queryFn: () => projectService.getProjectsMeta(projects),
  });

  return {
    meta: data ?? {},
    isLoading: isFetching,
    error,
  };
}
