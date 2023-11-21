import {
	IconButtonComponent,
	LinkButtonComponent,
	PrimaryButtonComponent,
	SecondaryButtonComponent
} from '@rkhomchenko/ui-kit/components';
import {BaseButtonComponent} from '@rkhomchenko/ui-kit/components/buttons/base-button.component';
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
	template: `<q9-primary-button 
								(click)="onClick($event)" 
								${btnArgsToTemplate(args)}>
								{{label}}
						 </q9-primary-button>`
});

export const Secondary: StoryFn<SecondaryButtonComponent> = args => ({
	props: args,
	template: `<q9-secondary-button
								(click)="onClick($event)"
								${btnArgsToTemplate(args)}>
								{{label}}
						 </q9-secondary-button>`
});

export const Link: StoryFn<LinkButtonComponent> = args => ({
	props: args,
	template: `<q9-link-button
								(click)="onClick($event)" 
								${btnArgsToTemplate(args)}>
								{{label}}
						 </q9-link-button>`
});

export const Icon: StoryFn<IconButtonComponent | any> = args => ({
	props: args,
	template: `<q9-icon-button
								(click)="onClick($event)"
								${btnArgsToTemplate(args)}>
						 </q9-icon-button>`
});

Icon.args = {
	icon: 'releases'
};
