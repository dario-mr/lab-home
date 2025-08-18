import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isMock = mode === 'mock';

  return {
    plugins: [react({ jsxRuntime: 'automatic' }), tailwindcss()],
    server: { port: 3000 },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // swap the service when running `npm run dev:mock`
        'components/projects/ProjectService': path.resolve(
          __dirname,
          isMock ? 'src/mocks/ProjectService.mock.ts' : 'src/components/projects/ProjectService.ts'
        ),
      },
    },
  };
});
