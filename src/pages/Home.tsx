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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Dario's Lab</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects.map((p) => (
          <li key={p.path} style={{ margin: '1rem 0' }}>
            <a
              href={p.path}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <img
                src={p.icon}
                alt={`${p.name} icon`}
                width={32}
                height={32}
                style={{ marginRight: '0.75rem' }}
              />
              <span style={{ fontSize: '1.25rem' }}>{p.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
