import React from 'react';

interface Project {
  name: string;
  icon: string;
  path: string;
}

const projects: Project[] = [
  {
    name: 'Ichiro Family Tree',
    icon: '/icons/ichiro-family-tree.png',
    path: '/ichiro-family-tree/',
  },
  {
    name: 'Ichiro Walks',
    icon: '/icons/ichiro-walks.png',
    path: '/ichiro-walks/today',
  },
  {
    name: 'Shortly',
    icon: '/icons/shortly.png',
    path: '/shortly/',
  },
  {
    name: 'API Stress Test',
    icon: '/icons/api-stress-test.png',
    path: '/api-stress-test/',
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-base-100">
      <div className="container mx-auto px-4 py-6">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Dario's Lab</h1>
          <a
            href="https://github.com/dario-mr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="btn btn-ghost btn-circle"
          >
            <img src="/icons/github.svg" alt="" className="size-6" />
          </a>
        </header>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.path}>
              <a
                href={p.path}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-base-200 hover:bg-base-300 transition shadow-md"
              >
                <div className="card-body flex-row items-center p-5 gap-4">
                  <img src={p.icon} alt="" className="size-10" />
                  <h2 className="card-title text-lg">{p.name}</h2>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
