import {NgControl} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {first} from 'lodash';

export abstract class DefaultErrorStateMatcher implements ErrorStateMatcher {
	abstract _control: NgControl;

	isErrorState(): boolean {
		return !!(this._control?.dirty && this._control?.invalid);
	}

	getError(errors: any) {
		if (!errors) return null;

		return first(Object.values(errors));
	}
}
