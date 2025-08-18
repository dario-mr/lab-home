import { LocalStorageKeys } from '@/constants/LocalStorageKeys';
import { Themes } from '@/constants/Themes';
import { type ThemeName } from '@/types';

const DEFAULT_THEME: ThemeName = Themes.CARAMELLATTE;
const THEME_SET = new Set<ThemeName>(Object.values(Themes) as ThemeName[]);

export function applyTheme(theme: ThemeName) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(LocalStorageKeys.APP_THEME, theme);
  } catch (error) {
    console.error(`Could not set theme [${theme}] to local storage`, error);
  }
}

export function getCurrentTheme(): ThemeName {
  try {
    const rawTheme = localStorage.getItem(LocalStorageKeys.APP_THEME) as ThemeName | null;
    const isValidTheme = rawTheme != null && THEME_SET.has(rawTheme);
    const theme = isValidTheme ? rawTheme! : DEFAULT_THEME;

    if (!isValidTheme) {
      localStorage.setItem(LocalStorageKeys.APP_THEME, theme);
    }

    return theme;
  } catch (error) {
    console.error(
      `Could not fetch current theme, returning default theme [${DEFAULT_THEME}]`,
      error
    );
    return DEFAULT_THEME;
  }
}
