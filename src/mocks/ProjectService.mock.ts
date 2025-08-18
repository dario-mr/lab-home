import type { Status } from '@/types';

class ProjectService {
  async getProjectHealth(_healthPath: string): Promise<Status> {
    await sleep(randomMs(500, 2000));
    return randomStatus();
  }

  async getProjectVersion(_infoPath: string): Promise<string> {
    await sleep(randomMs(500, 2000));
    return randomVersion();
  }
}

export const projectService = new ProjectService();

// helpers
const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
const randomMs = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const randInt0to10 = () => Math.floor(Math.random() * 11);
const randomVersion = () => `${randInt0to10()}.${randInt0to10()}.${randInt0to10()}`;
const randomStatus = (): Status => (Math.random() < 0.5 ? 'UP' : 'DOWN');
