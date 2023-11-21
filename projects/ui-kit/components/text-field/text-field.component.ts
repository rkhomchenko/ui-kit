import {CommonModule} from '@angular/common';
import {
	Component,
	Input,
	Optional,
	Self,
	ViewEncapsulation
} from '@angular/core';
import {ControlValueAccessor, FormsModule, NgControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Q9TransformPipe} from '@rkhomchenko/ui-kit/common';
import {DefaultErrorStateMatcher} from '@rkhomchenko/ui-kit/validators';

@Component({
	selector: 'q9-text-field',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatProgressSpinnerModule,
		Q9TransformPipe
	],
	templateUrl: './text-field.component.html',
	styleUrls: ['./text-field.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class TextFieldComponent
	extends DefaultErrorStateMatcher
	implements ControlValueAccessor
{
	@Input() public color: ThemePalette = 'primary';
	@Input() public label: string;
	@Input() public icon: string;
	@Input() public hint: string;

	constructor(@Optional() @Self() public _control: NgControl) {
		super();

		if (this._control != null) {
			this._control.valueAccessor = this;
		}
	}

	_value: string;
	_isDisabled: boolean;
	_onChange: (event: any) => void;

	writeValue(value: string): void {
		this._value = value;
	}

	registerOnChange(onChange: () => void): void {
		this._onChange = onChange;
	}

	registerOnTouched(): void {}

	setDisabledState?(isDisabled: boolean): void {
		this._isDisabled = isDisabled;
	}
}
