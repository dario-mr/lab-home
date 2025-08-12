import type { Project, Status } from '../types';

export function ProjectCard({
  project,
  status = '...',
}: {
  project: Project;
  status?: Status;
}) {
  const badge =
    status === 'UP'
      ? 'badge-success'
      : status === 'DOWN'
        ? 'badge-error'
        : 'badge-ghost';

  return (
    <a
      href={project.path}
      target="_blank"
      rel="noopener noreferrer"
      className="card bg-base-200 hover:bg-base-300 transition shadow-md"
    >
      <div className="card-body flex-row items-center p-5 gap-4">
        <img src={project.icon} alt="" className="size-10" />
        <h2 className="card-title text-lg">{project.name}</h2>
        <span className={`ml-auto badge badge-sm ${badge}`}>{status}</span>
      </div>
    </a>
  );
}