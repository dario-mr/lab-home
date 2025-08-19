import type { Status } from '@/types';

export function HealthBadge({ status }: { status: Status | undefined }) {
  const baseClass = 'badge badge-sm w-14';
  const statusClass = status === 'UP' ? 'badge-success' : 'badge-error';

  // Loading
  if (status === undefined) {
    return <span className={`${baseClass} skeleton`} />;
  }

  // Ready
  return <span className={`${baseClass} ${statusClass}`}>{status}</span>;
}
