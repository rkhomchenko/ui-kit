import {CommonModule} from '@angular/common';
import {MatTooltip, MatTooltipModule} from '@angular/material/tooltip';
import {PrimaryButtonComponent} from '@q9elements/ui-kit/components';
import {Meta, moduleMetadata, StoryFn} from '@storybook/angular';

export default {
	title: 'Components/Angular Material/Tooltip',
	decorators: [
		moduleMetadata({
			imports: [CommonModule, MatTooltipModule, PrimaryButtonComponent]
		})
	]
} as Meta;

export const Basic: StoryFn<MatTooltip> = args => ({
	props: args,
	template: `
		<q9-primary-button [matTooltip]="message"
										[matTooltipDisabled]="disabled"
										[matTooltipHideDelay]="hideDelay"
										[matTooltipPosition]="position"
										[matTooltipShowDelay]="showDelay"
		>{{label}}</q9-primary-button>
	`
});

Basic.args = {
	label: 'Chick me!',
	message: 'Tooltip message',
	disabled: false,
	hideDelay: 400,
	position: 'right',
	showDelay: 400
} as Partial<MatTooltip>;

// TODO: add argTypes
