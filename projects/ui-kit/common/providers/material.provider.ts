import {EnvironmentProviders, Provider} from '@angular/core';
import {
	MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,
	MatButtonToggleDefaultOptions
} from '@angular/material/button-toggle';
import {
	MAT_FORM_FIELD_DEFAULT_OPTIONS,
	MatFormFieldDefaultOptions
} from '@angular/material/form-field';
import {
	MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
	MatProgressSpinnerDefaultOptions
} from '@angular/material/progress-spinner';
import {MAT_SELECT_CONFIG, MatSelectConfig} from '@angular/material/select';

const MAT_FORM_FIELD_OPTIONS_PROVIDER: Provider = {
	provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
	useValue: {
		color: 'primary',
		floatLabel: 'auto',
		appearance: 'outline',
		subscriptSizing: 'dynamic',
		hideRequiredMarker: false
	} as MatFormFieldDefaultOptions
};

const MAT_PROGRESS_SPINNER_OPTIONS_PROVIDER: Provider = {
	provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
	useValue: {
		color: 'primary',
		diameter: 24,
		strokeWidth: 2
	} as MatProgressSpinnerDefaultOptions
};

const MAT_BUTTON_TOGGLE_OPTIONS_PROVIDER: Provider = {
	provide: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,
	useValue: {
		appearance: 'standard'
	} as MatButtonToggleDefaultOptions
};

const MAT_SELECT_OPTIONS_PROVIDER: Provider = {
	provide: MAT_SELECT_CONFIG,
	useValue: {
		panelWidth: 'auto',
		disableOptionCentering: true,
		hideSingleSelectionIndicator: true
	} as MatSelectConfig
};

export default function provideMaterialSettings(): Array<
	Provider | EnvironmentProviders
> {
	return [
		MAT_FORM_FIELD_OPTIONS_PROVIDER,
		MAT_PROGRESS_SPINNER_OPTIONS_PROVIDER,
		MAT_BUTTON_TOGGLE_OPTIONS_PROVIDER,
		MAT_SELECT_OPTIONS_PROVIDER
	];
}
