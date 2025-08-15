import React from 'react';
import { Dropdown } from '../ui/Dropdown';
import { applyTheme, getCurrentTheme } from '../../utils/themeUtils';
import { type ThemeName, Themes } from '../../constants/Themes';
import { LocalStorageKeys } from '../../constants/LocalStorageKeys';
import { PaletteIcon } from '../icons/PaletteIcon';

const themeNames = Object.values(Themes) as ThemeName[];

export function ThemePicker() {
  const [theme, setTheme] = React.useState<ThemeName>(getCurrentTheme());

  // ensure DOM matches on first render
  React.useEffect(() => applyTheme(theme), []);

  // sync if another tab changes the theme
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

  const chooseTheme = (t: ThemeName) => {
    setTheme(t);
    applyTheme(t);
  };

  return (
    <Dropdown
      buttonClassName="btn btn-secondary btn-circle btn-sm"
      button={
        <>
          <PaletteIcon className="h-6 w-6" />
          <span className="sr-only">Change theme</span>
        </>
      }
    >
      <ul className="max-h-80 overflow-y-auto space-y-2">
        {themeNames.map((t) => {
          const selected = t === theme;
          return (
            <li key={t}>
              <button
                type="button"
                data-theme={t}
                data-selected={selected}
                onClick={() => chooseTheme(t)}
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
    </Dropdown>
  );
}
