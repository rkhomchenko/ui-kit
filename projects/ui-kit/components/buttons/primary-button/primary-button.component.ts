import {CommonModule} from '@angular/common';
import {Component, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {BaseButtonComponent} from '../base-button.component';

@Component({
	selector: 'q9-primary-btn',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule
	],
	templateUrl: './primary-button.component.html',
	styleUrls: ['./primary-button.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PrimaryButtonComponent extends BaseButtonComponent {}
