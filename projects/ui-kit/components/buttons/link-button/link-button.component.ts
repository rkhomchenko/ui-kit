import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {BaseButtonComponent} from '../base-button.component';

@Component({
	selector: 'q9-link-btn',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatInputModule
	],
	templateUrl: './link-button.component.html',
	styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent extends BaseButtonComponent {}
