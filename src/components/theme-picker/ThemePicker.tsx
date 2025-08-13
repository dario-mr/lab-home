import React from 'react';
import { applyTheme, getCurrentTheme } from '../../utils/themeUtils';
import { type ThemeName, Themes } from '../../constants/Themes';
import { LocalStorageKeys } from '../../constants/LocalStorageKeys';

const themeNames = Object.values(Themes) as ThemeName[];

export function ThemePicker() {
  const [theme, setTheme] = React.useState<ThemeName>(getCurrentTheme());

  React.useEffect(() => applyTheme(theme), []); // ensure DOM matches on first render

  // Keep state in sync if another tab changes it
  React.useEffect(() => {
    const fn = (e: StorageEvent) => {
      if (e.key === LocalStorageKeys.APP_THEME && typeof e.newValue === 'string') {
        const newTheme = e.newValue as ThemeName;
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };
    window.addEventListener('storage', fn);
    return () => window.removeEventListener('storage', fn);
  }, []);

  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost btn-sm">Theme</button>

      <div className="dropdown-content z-20 mt-2 w-64 rounded-box bg-base-200 p-2 shadow">
        <ul className="max-h-80 overflow-y-auto space-y-2">
          {themeNames.map((t) => {
            const selected = t === theme;
            return (
              <li key={t}>
                <button
                  type="button"
                  data-theme={t}
                  data-selected={selected}
                  onClick={() => {
                    setTheme(t);
                    applyTheme(t);
                  }}
                  className="theme-row"
                >
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="theme-swatch bg-primary" />
                    <span className="theme-swatch bg-secondary" />
                    <span className="theme-swatch bg-accent" />
                  </div>

                  <span className="capitalize grow text-left">{t}</span>

                  {selected && <span className="badge badge-xs badge-primary">✓</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
