import {get} from 'lodash';

import type {Configuration, RuleSetRule} from 'webpack';

const isRuleForScss = (rule: RuleSetRule) =>
	rule.test instanceof RegExp && rule.test.test('test.scss');

export default function webpackFinal(config: Configuration) {
	const rules = config?.module?.rules;

	if (!rules?.length) return config;

	const scssRules = rules.find(
		rule => typeof rule === 'object' && isRuleForScss(rule!)
	);

	const oneOf = get(scssRules, 'rules[0].oneOf', []) as Array<any>;

	oneOf.push({
		resourceQuery: /\?ngStorybook/,
		use: [
			{loader: require.resolve('style-loader')},
			{loader: require.resolve('css-loader')},
			{
				loader: require.resolve('sass-loader'),
				options: {
					implementation: require.resolve('sass'),
					sassOptions: {
						includePaths: ['node_modules']
					}
				}
			}
		]
	});

	return config;
}
