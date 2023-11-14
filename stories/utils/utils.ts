import {ErrorStateMatcher} from '@angular/material/core';

export class ErrorStateMatcherStub implements ErrorStateMatcher {
	isErrorState(): boolean {
		return true;
	}
}

export function validationStub() {
	return {error: true};
}
