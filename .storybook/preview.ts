import {importProvidersFrom} from '@angular/core';
import {CoreModule} from '@q9elements/ui-kit/common';
import {setCompodocJson} from '@storybook/addon-docs/angular';
import {withThemeByClassName} from '@storybook/addon-themes';
import {applicationConfig, moduleMetadata, Preview} from '@storybook/angular';

import docJson from '../documentation.json';
import '../stories/styles/global.scss?ngStorybook';
import '../projects/ui-kit/styles/index.scss?ngStorybook';
import {provideServiceMocks} from '../stories/mocks';

setCompodocJson(docJson);

const themeClasses = ['q9-system', 'q9-light', 'q9-dark'];

export default {
	parameters: {
		actions: {argTypesRegex: '^on.*'},
		backgrounds: {
			disable: true
		}
	},
	decorators: [
		withThemeByClassName({
			themes: themeClasses.reduce(
				(obj, value) => ({
					...obj,
					[value]: `${value} mat-app-background mat-typography`
				}),
				{}
			),
			defaultTheme: themeClasses[0],
			parentSelector: 'body'
		}),
		applicationConfig({
			providers: [importProvidersFrom(CoreModule), provideServiceMocks()]
		}),
		moduleMetadata({
			imports: [CoreModule]
		})
	]
} as Preview;
