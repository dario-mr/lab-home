import type { ProjectMeta } from '@/types';

export function HealthBadge({
  meta,
  isLoading,
  isEnabled,
}: {
  meta: ProjectMeta;
  isLoading: boolean;
  isEnabled: boolean;
}) {
  const baseClass: string = 'badge badge-sm w-20';
  const statusClass = !isLoading && meta.status === 'UP' ? 'badge-success' : 'badge-error';

  // loading
  if (isLoading) {
    return <span className={`${baseClass} skeleton`} />;
  }

  if (!isEnabled) {
    return <span className={`${baseClass} badge-neutral`}>DISABLED</span>;
  }

  // ready
  return <span className={`${baseClass} ${statusClass}`}>{meta.status}</span>;
}
