export const THEMES = ['system', 'dark', 'light'] as const;

export type Theme = (typeof THEMES)[number];

export interface UserSettings {
	// Selected theme
	theme?: Theme;
	// Whether sidenav is expanded or not
	sidenav?: boolean;
}

export const USER_SETTINGS_KEY = 'q9-user-settings';

export const INITIAL_USER_SETTINGS: UserSettings = {
	theme: 'system',
	sidenav: true
};
