import { useEffect, useState } from 'react';
import type { Project } from '../types';

export function useVersion(items: Project[], timeoutMs = 5000) {
  const [version, setVersion] = useState<Record<string, string | null>>({});

  useEffect(() => {
    let mounted = true;
    const abortControllers = items.map(() => new AbortController());

    items.forEach((project, i) => {
      setVersion((h) => ({ ...h, [project.infoPath]: '...' })); // loading
      const abortController = abortControllers[i];
      const timeout = setTimeout(() => abortController.abort(), timeoutMs);

      fetch(project.infoPath, {
        headers: { accept: 'application/json' },
        signal: abortController.signal,
      })
        .then(async (res) => {
          if (!res.ok) {
            return null;
          }

          const contentType = res.headers.get('content-type') || '';
          if (!contentType.includes('application/json')) {
            return null;
          }

          const body = await res.json().catch(() => ({}));
          const rawVersion = body?.build?.version ?? body?.version ?? body?.Version;
          if (rawVersion == null) {
            return null;
          }

          const stringVersion = String(rawVersion).trim();
          return stringVersion || null;
        })
        .catch(() => null)
        .then((s) => {
          if (mounted) {
            setVersion((h) => ({ ...h, [project.infoPath]: s }));
          }
        })
        .finally(() => clearTimeout(timeout));
    });

    return () => {
      mounted = false;
      abortControllers.forEach((controller) => controller.abort());
    };
  }, [items, timeoutMs]);

  return version;
}
