import { ThemePicker } from '../theme-picker/ThemePicker';
import React from 'react';
import { GithubIcon } from '../icons/GithubIcon';

type HeaderProps = {
  title: string;
  githubUrl: string;
};

export function Header({ title, githubUrl }: HeaderProps) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="flex items-center gap-3">
        <ThemePicker />
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="btn btn-ghost btn-circle"
        >
          <GithubIcon className="btn-primary btn-circle btn-sm" />
        </a>
      </div>
    </header>
  );
}
