import type { ProjectMeta } from '@/types';

export function HealthBadge({ meta, isLoading }: { meta: ProjectMeta; isLoading: boolean }) {
  const baseClass: string = 'badge badge-sm w-14';
  const statusClass = !isLoading && meta.status === 'UP' ? 'badge-success' : 'badge-error';

  // loading
  if (isLoading) {
    return <span className={`${baseClass} skeleton`} />;
  }

  // ready
  return <span className={`${baseClass} ${statusClass}`}>{meta.status}</span>;
}
