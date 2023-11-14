import webpackFinal from './webpackFinal';

import type {StorybookConfig} from '@storybook/angular';

const uiKitPath = '../projects/ui-kit';
const [jsExtensions, docExtensions] = [
	'**/*.stories.@(js|jsx|mjs|ts|tsx)',
	'**/*.mdx'
];

const config: StorybookConfig = {
	stories: [
		`${uiKitPath}/${jsExtensions}`,
		`../stories/${jsExtensions}`,
		`${uiKitPath}/${docExtensions}`,
		`../stories/${docExtensions}`
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-themes',
		'@storybook/addon-a11y'
	],
	framework: {
		name: '@storybook/angular',
		options: {}
	},
	staticDirs: [
		{from: '../stories/assets', to: '/assets'},
		{from: '../projects/ui-kit/assets', to: '/assets'}
	],
	core: {
		builder: {
			name: '@storybook/builder-webpack5',
			options: {
				lazyCompilation: true
			}
		}
	},
	webpackFinal
};
export default config;
