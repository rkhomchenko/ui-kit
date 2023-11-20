import {CommonModule} from '@angular/common';
import {Injector} from '@angular/core';
import {Theme, ThemeService} from '@q9elements/ui-kit/common';
import {SelectModule} from '@q9elements/ui-kit/components';
import {action} from '@storybook/addon-actions';
import {Meta, moduleMetadata, StoryFn} from '@storybook/angular';

import {injectInjectorToProps} from '../utils';

export default {
	title: 'Components/Angular Material/Theming',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, SelectModule]
		}),
		injectInjectorToProps()
	]
} as Meta;

export const ThemeSwitcher: StoryFn = args => {
	return {
		props: {
			...args,
			getCurrentTheme(injector: Injector) {
				const themeService = injector.get(ThemeService);
				const theme = themeService.getCurrentTheme();

				themeService.applyTheme(theme);

				return theme;
			},
			onChange(injector: Injector, theme: Theme) {
				action('changed')(theme);
				injector.get(ThemeService).applyTheme(theme);
			}
		},
		template: `
			<q9-select label="Theme"
								 [value]="getCurrentTheme(injector)"
								 (selectionChange)="onChange(injector, $event.value)">
				<q9-option *ngFor="let theme of themes" [value]="theme">
					{{theme | titlecase}}
				</q9-option>
			</q9-select>
				`
	};
};

ThemeSwitcher.args = {
	themes: ['system', 'dark', 'light']
};
