import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {BaseButtonComponent} from '../base-button.component';

@Component({
	selector: 'q9-secondary-btn',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule
	],
	templateUrl: './secondary-button.component.html',
	styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent extends BaseButtonComponent {}
