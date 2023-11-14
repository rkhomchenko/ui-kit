import {CommonModule} from '@angular/common';
import {
	FormControl,
	FormsModule,
	ReactiveFormsModule,
	ValidatorFn
} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {SelectComponent, SelectModule} from '@q9elements/ui-kit/components';
import {Q9Validators} from '@q9elements/ui-kit/validators';
import {
	argsToTemplate,
	Meta,
	moduleMetadata,
	StoryFn,
	StoryObj
} from '@storybook/angular';

import {BaseControlArgs, BaseControlArgTypes} from '../utils';

export default {
	title: 'Components/Angular Material/Select',
	tags: ['autodocs'],
	component: SelectComponent,
	parameters: {
		controls: {
			exclude: [
				'_value',
				'_control',
				'getError',
				'_onChange',
				'writeValue',
				'_isDisabled',
				'isErrorState',
				'setDisabledState',
				'registerOnChange',
				'registerOnTouched'
			]
		}
	},
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule,
				SelectModule,
				MatIconModule
			]
		})
	],
	render: ({value, onChange, ...args}) => ({
		props: {value, onChange, ...args},
		template: `
				<q9-select ${argsToTemplate(args)}
											 [ngModel]="value"
											 (ngModelChange)="onChange($event)">
					<q9-option *ngFor="let value of values" [value]="value">
						Option {{ value }}
					</q9-option>
				</q9-select>
		`
	}),
	args: {
		...BaseControlArgs,
		multiple: false,
		values: [1, 2, 3, 4, 5]
	},
	argTypes: {
		...BaseControlArgTypes,
		multiple: {
			control: 'boolean',
			description: 'Whether the select is multiple.'
		},
		hint: {
			control: 'text',
			description: 'Hint text to be shown underneath the text field.'
		},
		onChange: {
			description: 'Emitted when the value has changed.',
			action: 'changed'
		},
		values: {
			control: 'object',
			description: 'Option values.'
		}
	}
} as Meta;

export const Default: StoryObj<SelectComponent> = {};

export const SelectWithHint: StoryObj<SelectComponent> = {
	name: 'With hint',
	args: {
		hint: 'Hint'
	}
};

export const SelectFormControl: StoryFn<any> = args => {
	const {value, disabled, required, onChange, ...props} = args;
	const validators: ValidatorFn[] = [];

	if (required) {
		validators.push(Q9Validators.required());
	}

	const formControl = new FormControl(
		{value, disabled},
		Q9Validators.compose(validators)
	);

	formControl.valueChanges.subscribe(onChange);

	return {
		props: {
			...props,
			formControl
		},
		template: `
			<q9-select ${argsToTemplate(args)}
										[formControl]="formControl">
				<q9-option *ngFor="let value of values" [value]="value">
					Option {{ value }}
				</q9-option>
			</q9-select>
		`
	};
};

SelectFormControl.storyName = 'Form control';
SelectFormControl.args = {
	required: false
};

SelectFormControl.argTypes = {
	required: {control: 'boolean'}
};
