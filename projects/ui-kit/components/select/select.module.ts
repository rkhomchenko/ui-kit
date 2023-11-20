import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {Q9TransformPipe} from '@q9elements/ui-kit/common';

import {OptionComponent} from './components/option/option.component';
import {SelectComponent} from './select.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatFormFieldModule,
		MatSelectModule,
		Q9TransformPipe
	],
	declarations: [SelectComponent, OptionComponent],
	exports: [SelectComponent, OptionComponent, FormsModule]
})
export class SelectModule {}
