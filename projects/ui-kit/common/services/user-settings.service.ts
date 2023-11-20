import {Injectable} from '@angular/core';
import {get, set} from 'lodash';

import {SessionService} from './session.service';
import {
	INITIAL_USER_SETTINGS,
	USER_SETTINGS_KEY,
	UserSettings
} from '../models/user-settings';

@Injectable({providedIn: 'root'})
export class UserSettingsService {
	constructor(private sessionService: SessionService) {}

	getSettings(): UserSettings {
		const settings = localStorage.getItem(
			`${USER_SETTINGS_KEY}:${this.sessionService.userId()}`
		);

		return settings ? JSON.parse(settings) : INITIAL_USER_SETTINGS;
	}

	updateSettings(settings: UserSettings) {
		localStorage.setItem(
			`${USER_SETTINGS_KEY}:${this.sessionService.userId()}`,
			JSON.stringify(settings)
		);
	}

	getSettingsByKey(path: keyof UserSettings | string, defaultValue?: any): any {
		const settings = this.getSettings();

		return get(settings, path, defaultValue);
	}

	updateSettingsByKey(path: keyof UserSettings | string, value: any) {
		const settings = this.getSettings();

		set(settings, path, value);

		this.updateSettings(settings);
	}

	clearSettings(userId: string) {
		localStorage.removeItem(`${USER_SETTINGS_KEY}:${userId}`);
	}
}
