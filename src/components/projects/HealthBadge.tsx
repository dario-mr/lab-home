import type { ProjectMeta } from '@/types';

export function HealthBadge({ meta }: { meta: ProjectMeta }) {
  const baseClass: string = 'badge badge-sm w-14';
  const statusClass = !meta.isLoading && meta.status === 'UP' ? 'badge-success' : 'badge-error';

  // loading
  if (meta.isLoading) {
    return <span className={`${baseClass} skeleton`} />;
  }

  // ready
  return <span className={`${baseClass} ${statusClass}`}>{meta.status}</span>;
}
