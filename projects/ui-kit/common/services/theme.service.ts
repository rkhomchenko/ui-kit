import {Injectable} from '@angular/core';
import {SessionService, UserSettingsService} from '@q9elements/ui-kit/common';

import {Theme, THEMES} from '../models/user-settings';

@Injectable({providedIn: 'root'})
export class ThemeService {
	constructor(
		private userSettingsService: UserSettingsService,
		private sessionService: SessionService
	) {}

	getCurrentTheme(): Theme {
		return this.userSettingsService.getSettingsByKey('theme', 'system');
	}

	applyTheme(theme?: Theme) {
		if (!theme) {
			theme = this.getCurrentTheme();
		}

		const classes = ['mat-app-background', 'mat-typography', `q9-${theme}`];
		const otherThemes = THEMES.filter(t => t !== theme).map(t => `q9-${t}`);

		document.body.classList.add(...classes);
		document.body.classList.remove(...otherThemes);
		this.userSettingsService.updateSettingsByKey('theme', theme);
	}
}
