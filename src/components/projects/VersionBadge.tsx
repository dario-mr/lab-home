export function VersionBadge({ version }: { version: string | null | undefined }) {
  const baseClass: string = 'badge badge-sm badge-outline-thin w-18';

  // loading
  if (version === undefined) {
    return <span className={`${baseClass} skeleton`} />;
  }

  // error
  if (version === null || version.trim() === '') {
    return <span className={baseClass}>n/a</span>;
  }

  // ready
  return <span className={baseClass}>v{version}</span>;
}
