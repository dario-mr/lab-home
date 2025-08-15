import { Themes } from './constants/Themes';

export type Status = 'UP' | 'DOWN' | '...';

export interface Project {
  name: string;
  icon: string;
  path: string;
  healthPath: string;
  infoPath: string;
}

export type ThemeKey = keyof typeof Themes;
export type ThemeName = (typeof Themes)[ThemeKey];
