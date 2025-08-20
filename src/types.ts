import { Themes } from './constants/Themes';

export type Status = 'UP' | 'DOWN';

export interface Project {
  name: string;
  icon: string;
  path: string;
  healthPath: string;
  infoPath: string;
}

type ThemeKey = keyof typeof Themes;
export type ThemeName = (typeof Themes)[ThemeKey];

export type ProjectMeta =
  | {
      isLoading: true;
    }
  | {
      isLoading: false;
      status: Status;
      version: string | null;
    };
