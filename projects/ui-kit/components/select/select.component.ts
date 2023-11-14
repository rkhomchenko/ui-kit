import {
	Component,
	ContentChildren,
	Input,
	Optional,
	QueryList,
	Self
} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {OptionComponent} from '@q9elements/ui-kit/components';
import {DefaultErrorStateMatcher} from '@q9elements/ui-kit/validators/error-state-matcher';

@Component({
	selector: 'q9-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent
	extends DefaultErrorStateMatcher
	implements ControlValueAccessor
{
	@Input() public color: ThemePalette = 'primary';
	@Input() public label: string;
	@Input() public hint: string;
	@Input() public multiple: boolean;

	@ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

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
