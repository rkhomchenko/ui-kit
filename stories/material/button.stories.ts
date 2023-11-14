import {
	IconButtonComponent,
	LinkButtonComponent,
	PrimaryButtonComponent,
	SecondaryButtonComponent
} from '@q9elements/ui-kit/components';
import {BaseButtonComponent} from '@q9elements/ui-kit/components/buttons/base-button.component';
import {
	argsToTemplate,
	Meta,
	moduleMetadata,
	StoryObj
} from '@storybook/angular';

import {BaseControlArgs, BaseControlArgTypes} from '../utils';

export default {
	title: 'Components/Angular Material/Button',
	tags: ['autodocs'],
	component: BaseButtonComponent,
	decorators: [
		moduleMetadata({
			imports: [
				PrimaryButtonComponent,
				SecondaryButtonComponent,
				LinkButtonComponent,
				IconButtonComponent
			]
		})
	],
	parameters: {
		controls: {
			// type: {
			// 	table: {
			// 		disabled: true
			// 	}
			// }
		}
	},
	render: args => {
		const {type, label, ...props} = args;

		return {
			props: {...props, label},
			template: `<q9-${type}-btn ${argsToTemplate(
				props
			)}>{{label}}</q9-${type}-btn>`
		};
	},
	args: {
		...BaseControlArgs,
		isLoading: false
	},
	argTypes: {
		type: {
			table: {
				disable: true
			}
		},
		...BaseControlArgTypes
	}
} as Meta;

export const Primary: StoryObj<SecondaryButtonComponent & any> = {
	args: {type: 'primary'}
};

export const Secondary: StoryObj<SecondaryButtonComponent & any> = {
	args: {type: 'secondary'}
};

export const Link: StoryObj<LinkButtonComponent & any> = {
	args: {type: 'link'}
};

export const Icon: StoryObj<IconButtonComponent & any> = {
	args: {type: 'icon', label: 'home'}
};
