import type { Status } from '@/types';

export class ProjectService {
  async getProjectHealth(healthPath: string): Promise<Status> {
    try {
      const res = await fetch(healthPath, { headers: { accept: 'application/json' } });
      if (!res.ok) {
        return 'DOWN';
      }

      const contentType = res.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        return 'UP';
      }

      const body: any = await res.json().catch(() => ({}));
      return String(body?.status ?? 'UP').toUpperCase() === 'UP' ? 'UP' : 'DOWN';
    } catch {
      return 'DOWN';
    }
  }

  async getProjectVersion(infoPath: string): Promise<string | null> {
    try {
      const res = await fetch(infoPath, { headers: { accept: 'application/json' } });
      if (!res.ok) {
        return null;
      }

      const contentType = res.headers.get('content-type') ?? '';
      if (!contentType.includes('application/json')) {
        return null;
      }

      const body: any = await res.json().catch(() => ({}));
      const raw = body?.build?.version ?? body?.version ?? body?.Version;
      const version = raw == null ? null : String(raw).trim();
      return version || null;
    } catch {
      return null;
    }
  }
}

export const projectService = new ProjectService();
