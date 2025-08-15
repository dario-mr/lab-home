import { useEffect, useState } from 'react';
import type { Project, Status } from '../types';

export function useHealth(items: Project[], timeoutMs = 5000) {
  const [health, setHealth] = useState<Record<string, Status>>({});

  useEffect(() => {
    let mounted = true;
    const abortControllers = items.map(() => new AbortController());

    items.forEach((project, i) => {
      setHealth((h) => ({ ...h, [project.healthPath]: '...' })); // loading
      const abortController = abortControllers[i];
      const timeout = setTimeout(() => abortController.abort(), timeoutMs);

      fetch(project.healthPath, {
        headers: { accept: 'application/json' },
        signal: abortController.signal,
      })
        .then(async (res) => {
          if (!res.ok) {
            return 'DOWN' as Status;
          }

          const contentType = res.headers.get('content-type') || '';
          if (contentType.includes('application/json')) {
            const body = await res.json().catch(() => ({}));
            // if no "status" field, treat as UP
            if (!Object.prototype.hasOwnProperty.call(body, 'status') || body.status == null) {
              return 'UP';
            }
            const status = String(body.status).toUpperCase();
            return status === 'UP' ? 'UP' : 'DOWN';
          }

          return 'UP' as Status; // reachable non-JSON
        })
        .catch(() => 'DOWN' as Status)
        .then((s) => {
          if (mounted) {
            setHealth((h) => ({ ...h, [project.healthPath]: s }));
          }
        })
        .finally(() => clearTimeout(timeout));
    });

    return () => {
      mounted = false;
      abortControllers.forEach((controller) => controller.abort());
    };
  }, [items, timeoutMs]);

  return health;
}
