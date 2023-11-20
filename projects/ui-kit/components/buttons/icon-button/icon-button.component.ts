import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {BaseButtonComponent} from '../base-button.component';

@Component({
	selector: 'q9-icon-button',
	standalone: true,
	imports: [
		CommonModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatFormFieldModule,
		MatIconModule
	],
	template: `
		<button mat-icon-button [color]="color" [disabled]="disabled">
			<ng-container *ngIf="!isLoading; else loader">
				<mat-icon [svgIcon]="icon"></mat-icon>
			</ng-container>

			<ng-template #loader>
				<mat-spinner matSuffix *ngIf="isLoading"></mat-spinner>
			</ng-template>
		</button>
	`,
	styleUrls: ['../base-button.component.scss']
})
export class IconButtonComponent extends BaseButtonComponent {
	@Input() icon: string;
}
