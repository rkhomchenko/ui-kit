import {Directive} from '@angular/core';
import {
	MAT_BUTTON_TOGGLE_GROUP,
	MatButtonToggleGroup
} from '@angular/material/button-toggle';

@Directive({
	selector: 'q9-button-toggle-group',
	providers: [
		{provide: MatButtonToggleGroup, useExisting: ButtonToggleGroupDirective},
		{provide: MAT_BUTTON_TOGGLE_GROUP, useExisting: ButtonToggleGroupDirective}
	],
	exportAs: 'q9ButtonToggleGroup'
})
export class ButtonToggleGroupDirective extends MatButtonToggleGroup {}
