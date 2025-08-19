import type { Status } from '@/types';

class ProjectService {
  async getProjectHealth(_healthPath: string): Promise<Status> {
    await randomSleep(1000, 2000);
    return randomStatus();
  }

  async getProjectVersion(_infoPath: string): Promise<string | null> {
    await randomSleep(1000, 2000);
    return randomVersion();
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
