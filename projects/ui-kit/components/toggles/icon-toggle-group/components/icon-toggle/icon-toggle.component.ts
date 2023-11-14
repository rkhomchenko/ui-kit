import {Component, Input} from '@angular/core';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
	selector: 'q9-icon-toggle',
	templateUrl: './icon-toggle.component.html',
	styleUrls: ['./icon-toggle.component.scss'],
	host: {
		'[class.q9-icon-toggle-checked]': 'checked'
	},
	providers: [{provide: MatButtonToggle, useExisting: IconToggleComponent}]
})
export class IconToggleComponent extends MatButtonToggle {
	@Input() public icon: string;
}
