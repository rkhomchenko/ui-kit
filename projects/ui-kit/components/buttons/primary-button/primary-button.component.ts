import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {BaseButtonComponent} from '../base-button.component';

@Component({
	selector: 'q9-primary-button',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule
	],
	template: `
		<button mat-flat-button [color]="color" [disabled]="disabled">
			<ng-container *ngIf="!isLoading; else loader">
				<ng-content></ng-content>
			</ng-container>

			<ng-template #loader>
				<mat-spinner matSuffix *ngIf="isLoading"></mat-spinner>
			</ng-template>
		</button>
	`,
	styleUrls: ['../base-button.component.scss']
})
export class PrimaryButtonComponent extends BaseButtonComponent {}
