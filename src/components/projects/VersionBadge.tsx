import type { ProjectMeta } from '@/types';

export function VersionBadge({ meta }: { meta: ProjectMeta }) {
  const baseClass: string = 'badge badge-sm w-18';

  // loading
  if (meta.isLoading) {
    return <span className={`${baseClass} skeleton`} />;
  }

  // error
  if (meta.version === null || meta.version.trim() === '') {
    return <span className={`${baseClass} badge-outline-thin`}>n/a</span>;
  }

  // ready
  return <span className={`${baseClass} badge-outline-thin`}>v{meta.version}</span>;
}
