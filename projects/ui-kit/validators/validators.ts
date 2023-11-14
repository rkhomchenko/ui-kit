/* eslint-disable */
import {ValidatorFn, Validators} from '@angular/forms';

import {ValidationMessages} from './message.decorator';

//NOTE: Based on Angular default validators
@ValidationMessages({
	min: 'This field must be greater than or equal to {min} (currently {actual}).',
	max: 'This field must be less than or equal to {max} (currently {actual}).',
	minLength: 'At least {requiredLength} characters required',
	maxLength: 'Up to {requiredLength} characters allowed',
	required: 'This field is required',
	requiredTrue: 'This field must be true',
	email: 'Please enter a valid email address.',
	pattern: `Value {actualValue} doesn't match the requested format.`,
	nullValidator: 'This field cannot be null.'
})
// @ts-ignore
export class Q9Validators extends Validators {
	static override min(min: number, message?: string): ValidatorFn {
		return super.min(min);
	}

	static override max(max: number, message?: string): ValidatorFn {
		return super.max(max);
	}

	static override required(message?: string): ValidatorFn {
		return super.required;
	}

	static override requiredTrue(message?: string): ValidatorFn {
		return super.requiredTrue;
	}

	static override email(message?: string): ValidatorFn {
		return super.email;
	}

	static override minLength(minLength: number, message?: string): ValidatorFn {
		return super.minLength(minLength);
	}

	static override maxLength(maxLength: number, message?: string): ValidatorFn {
		return super.maxLength(maxLength);
	}

	static override pattern(
		pattern: string | RegExp,
		message?: string
	): ValidatorFn {
		return super.pattern(pattern);
	}

	static override nullValidator(message?: string): ValidatorFn {
		return super.nullValidator;
	}
}
