import {Component, Input} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
	template: '',
	standalone: true
})
export class BaseButtonComponent {
	@Input() public color: ThemePalette = 'primary';
	@Input() public disabled: boolean;
	@Input() public isLoading: boolean;
}
