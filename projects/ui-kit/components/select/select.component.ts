import {
	Component,
	ContentChildren,
	EventEmitter,
	Input,
	Optional,
	Output,
	QueryList,
	Self
} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatSelectChange} from '@angular/material/select';
import {DefaultErrorStateMatcher} from '@rkhomchenko/ui-kit/validators';

import {OptionComponent} from './components/option/option.component';

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
	@Input() public value: any;

	@Output() selectionChange = new EventEmitter<MatSelectChange>();

	@ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

	constructor(@Optional() @Self() public _control: NgControl) {
		super();

		if (this._control != null) {
			this._control.valueAccessor = this;
		}
	}

	_isDisabled: boolean;
	_onChange = (event: MatSelectChange) => this.selectionChange.emit(event);

	writeValue(value: string): void {
		this.value = value;
	}

	registerOnChange(onChange: (value: any) => void): void {
		this._onChange = (event: MatSelectChange) => {
			this.selectionChange.emit(event);
			onChange(event.value);
		};
	}

	registerOnTouched(): void {}

	setDisabledState?(isDisabled: boolean): void {
		this._isDisabled = isDisabled;
	}
}
