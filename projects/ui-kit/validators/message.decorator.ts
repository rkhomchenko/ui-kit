import {TypeDecorator} from '@angular/core';
import {AbstractControl, ValidationErrors, Validators} from '@angular/forms';
import {set} from 'lodash';

export function ValidationMessages(messages: {
	[key: string]: string;
}): TypeDecorator {
	return (target: typeof Validators & any): typeof Validators => {
		const prototype = Object.getPrototypeOf(target);
		const properties: any = Object.keys(messages).reduce(
			(acc: PropertyDescriptorMap, validatorKey) => {
				const descriptor = Object.getOwnPropertyDescriptor(
					prototype,
					validatorKey
				);

				if (!descriptor) return acc;

				const baseValidator = descriptor.value;
				const childValidator = target[validatorKey];
				const hasExtraParams = childValidator.length > baseValidator.length;

				acc[validatorKey] = {
					value: function (...args: any[]) {
						let message =
							args[childValidator.length - 1] || messages[validatorKey];
						const validatorFunc = hasExtraParams
							? baseValidator.apply(this, args)
							: baseValidator.bind(this);

						return (control: AbstractControl): ValidationErrors | null => {
							const result = validatorFunc(control);

							if (!result) return null;

							const errorKey = Object.keys(result)[0];

							message = formatErrorMessage(result[errorKey], message);

							set(result, `${errorKey}.message`, message);

							return result;
						};
					}
				};

				return acc;
			},
			{}
		);

		Object.defineProperties(target, properties);

		return target;
	};
}

function formatErrorMessage(
	params: {[key: string]: any},
	message: string
): string {
	if (typeof params === 'object') {
		const keys = Object.keys(params).join('|');
		const regex = new RegExp(`{(${keys})}`, 'gi');

		message = message.replace(
			regex,
			(match: string, key: string) => params[key]
		);
	}

	return message;
}
