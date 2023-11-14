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
	StoryFn
} from '@storybook/angular';
import {omit} from 'lodash';

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
	args: {
		...BaseControlArgs,
		isLoading: false
	},
	argTypes: {
		onClick: {action: 'clicked'},
		...BaseControlArgTypes
	}
} as Meta;

const btnArgsToTemplate = (args: any) => argsToTemplate(omit(args, ['label']));

export const Primary: StoryFn<PrimaryButtonComponent> = args => ({
	props: args,
	template: `<q9-primary-btn 
								(click)="onClick($event)" 
								${btnArgsToTemplate(args)}>
								{{label}}
						 </q9-primary-btn>`
});

export const Secondary: StoryFn<SecondaryButtonComponent> = args => ({
	props: args,
	template: `<q9-secondary-btn
								(click)="onClick($event)"
								${btnArgsToTemplate(args)}>
								{{label}}
						 </q9-secondary-btn>`
});

export const Link: StoryFn<LinkButtonComponent> = args => ({
	props: args,
	template: `<q9-link-btn
								(click)="onClick($event)" 
								${btnArgsToTemplate(args)}>
								{{label}}
						 </q9-link-btn>`
});

export const Icon: StoryFn<IconButtonComponent | any> = args => ({
	props: args,
	template: `<q9-icon-btn
								(click)="onClick($event)"
								${btnArgsToTemplate(args)}>
						 </q9-icon-btn>`
});

Icon.args = {
	icon: 'releases'
};
