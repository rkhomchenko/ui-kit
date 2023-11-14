import {Args} from '@storybook/angular';
import {ArgTypes} from '@storybook/types';

import {COLOR_CONTROL} from './controls';
import {THEME_PALETTE} from './enums';

export const BaseControlArgs: Args = {
	label: 'Label',
	color: THEME_PALETTE.PRIMARY,
	disabled: false
};

export const BaseControlArgTypes: ArgTypes = {
	color: COLOR_CONTROL,
	label: {
		description: 'Component label',
		control: 'text'
	},
	disabled: {
		control: 'boolean',
		description: 'Whether the component is disabled.'
	}
};
