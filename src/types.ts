export type Status = 'UP' | 'DOWN' | '...';

export interface Project {
  name: string;
  icon: string;
  path: string;
  healthPath: string;
  infoPath: string;
}
