import {CommonModule} from '@angular/common';
import {
	FormControl,
	FormsModule,
	ReactiveFormsModule,
	ValidatorFn
} from '@angular/forms';
import {TextFieldComponent} from '@q9elements/ui-kit/components';
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
	title: 'Components/Angular Material/Text Field',
	component: TextFieldComponent,
	render: ({value, onChange, ...args}) => ({
		props: {value, onChange, ...args},
		template: `
				<q9-text-field ${argsToTemplate(args)}
											 [ngModel]="value"
											 (ngModelChange)="onChange($event)"></q9-text-field>
		`
	}),
	tags: ['autodocs'],
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
	args: {
		...BaseControlArgs,
		value: 'Input value'
	},
	argTypes: {
		...BaseControlArgTypes,
		hint: {
			control: 'text',
			description: 'Hint text to be shown underneath the text field.'
		},
		icon: {
			control: 'text',
			description: 'Icon to be shown on the left side of the text field.'
		},
		onChange: {
			description: 'Emitted when the value has changed.',
			action: 'changed'
		},
		value: {
			control: 'text',
			description: 'Initial text field value.'
		}
	},
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
				FormsModule,
				TextFieldComponent,
				ReactiveFormsModule
			]
		})
	]
} as Meta;

export const Basic: StoryObj<TextFieldComponent> = {};

export const InputWithIcon: StoryObj<TextFieldComponent> = {
	name: 'With icon',
	args: {
		icon: 'favorite'
	}
};

export const InputWithHint: StoryObj<TextFieldComponent> = {
	name: 'With hint',
	args: {
		hint: 'Hint'
	}
};

export const InputWithIconAndHint: StoryObj<TextFieldComponent> = {
	name: 'With icon and hint',
	args: {
		icon: 'favorite',
		hint: 'Hint'
	}
};

export const InputFormControl: StoryFn<any> = args => {
	const {value, disabled, required, minLength, maxLength, onChange, ...props} =
		args;
	const validators: ValidatorFn[] = [];

	if (required) {
		validators.push(Q9Validators.required());
	}

	if (minLength) {
		validators.push(Q9Validators.minLength(minLength));
	}

	if (maxLength) {
		validators.push(Q9Validators.maxLength(maxLength));
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
		<q9-text-field [formControl]="formControl"
									${argsToTemplate(props)}>
		</q9-text-field>
		`
	};
};

InputFormControl.storyName = 'Form control';
InputFormControl.args = {
	required: false,
	minLength: 2,
	maxLength: 10
};

InputFormControl.argTypes = {
	required: {control: 'boolean'},
	minLength: {control: 'number'},
	maxLength: {control: 'number'}
};
