import type { Status } from '../../types';

class ProjectService {
  async getProjectHealth(healthPath: string): Promise<Status> {
    try {
      const res = await fetch(healthPath, {
        headers: { accept: 'application/json' },
      });

      if (!res.ok) {
        return 'DOWN';
      }

      const contentType = res.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        return 'UP';
      }

      const body: any = await res.json().catch(() => ({}));
      const status = String(body?.status ?? 'UP').toUpperCase();
      return status === 'UP' ? 'UP' : 'DOWN';
    } catch {
      return 'DOWN';
    }
  }

  async getProjectVersion(infoPath: string): Promise<string> {
    try {
      const res = await fetch(infoPath, {
        headers: { accept: 'application/json' },
      });

      if (!res.ok) {
        return '';
      }

      const contentType = res.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        return '';
      }

      const body: any = await res.json().catch(() => ({}));
      const rawVersion = body?.build?.version ?? body?.version ?? body?.Version;
      if (rawVersion == null) {
        return '';
      }

      return String(rawVersion).trim();
    } catch {
      return '';
    }
  }
}

export const projectService = new ProjectService();
