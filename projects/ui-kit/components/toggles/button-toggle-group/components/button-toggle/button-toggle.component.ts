import {Component} from '@angular/core';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
	selector: 'q9-button-toggle',
	templateUrl: './button-toggle.component.html',
	styleUrls: ['./button-toggle.component.scss'],
	host: {
		'[class.q9-button-toggle-checked]': 'checked'
	},
	providers: [{provide: MatButtonToggle, useExisting: ButtonToggleComponent}]
})
export class ButtonToggleComponent extends MatButtonToggle {}
