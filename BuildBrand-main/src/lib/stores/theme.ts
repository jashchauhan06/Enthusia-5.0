import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize with light theme and persist to localStorage
function createThemeStore() {
	const defaultTheme = 'light';
	
	// Get initial theme from localStorage or use default
	const initialTheme = browser ? 
		(localStorage.getItem('theme') || defaultTheme) : 
		defaultTheme;
	
	const { subscribe, set, update } = writable<string>(initialTheme);

	return {
		subscribe,
		set: (value: string) => {
			if (browser) {
				localStorage.setItem('theme', value);
			}
			set(value);
		},
		update
	};
}

export const themeStore = createThemeStore();

export function setThemeStore(themeType: string) {
	const theme = ['dark', 'light'].indexOf(themeType) > -1 ? themeType : 'light';
	themeStore.set(theme);
}
