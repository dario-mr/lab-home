type HeaderProps = {
  title: string;
  githubUrl: string;
};

export function Header({ title, githubUrl }: HeaderProps) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="btn btn-ghost btn-circle"
      >
        <img src="/icons/github.svg" alt="" className="size-6" />
      </a>
    </header>
  );
}