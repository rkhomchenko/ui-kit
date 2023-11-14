import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {BaseButtonComponent} from '../base-button.component';

@Component({
	selector: 'q9-icon-btn',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatIconModule
	],
	templateUrl: './icon-button.component.html',
	styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent extends BaseButtonComponent {}
