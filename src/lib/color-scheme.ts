import { browser } from '$app/environment';

export const STORAGE_KEY = 'color-scheme';

export type ColorScheme = 'light' | 'dark';

export function getSystemPreference(): ColorScheme {
	if (!browser) return 'light';
	return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getStoredPreference(): ColorScheme | null {
	if (!browser) return null;
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;
	return null;
}

export function getInitialScheme(): ColorScheme {
	return getStoredPreference() ?? getSystemPreference();
}

export function applyColorScheme(scheme: ColorScheme) {
	if (!browser) return;
	document.documentElement.classList.toggle('dark', scheme === 'dark');
}

export function readAppliedScheme(): ColorScheme {
	if (!browser) return 'light';
	return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}
