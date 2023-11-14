import {Component} from '@angular/core';
import {
	MAT_BUTTON_TOGGLE_GROUP,
	MatButtonToggleGroup
} from '@angular/material/button-toggle';

@Component({
	selector: 'q9-icon-toggle-group',
	templateUrl: './icon-toggle-group.component.html',
	styleUrls: ['./icon-toggle-group.component.scss'],
	providers: [
		{provide: MatButtonToggleGroup, useExisting: IconToggleGroupComponent},
		{provide: MAT_BUTTON_TOGGLE_GROUP, useExisting: IconToggleGroupComponent}
	]
})
export class IconToggleGroupComponent extends MatButtonToggleGroup {}
