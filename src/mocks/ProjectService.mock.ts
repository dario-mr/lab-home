import { ProjectMeta, Status } from '@/types';

class ProjectService {
  async getProjectsMeta(
    projects: Array<{ path: string; healthPath: string; infoPath: string }>
  ): Promise<Record<string, ProjectMeta>> {
    await randomSleep(3000, 3000);

    const entries = projects.map(
      (project) =>
        [
          project.path,
          {
            status: randomStatus(),
            version: randomVersion(),
          },
        ] as const
    );

    return Object.fromEntries(entries);
  }
}

export const projectService = new ProjectService();

// helpers
export const randomSleep = (minMs: number, maxMs: number) => {
  if (minMs > maxMs) {
    throw new Error('minMs must be <= maxMs');
  }

  const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise<void>((r) => setTimeout(r, delay));
};

const randInt0to20 = () => Math.floor(Math.random() * 21);
const randomVersion = () => `${randInt0to20()}.${randInt0to20()}.${randInt0to20()}`;
const randomStatus = (): Status => (Math.random() < 0.5 ? 'UP' : 'DOWN');
