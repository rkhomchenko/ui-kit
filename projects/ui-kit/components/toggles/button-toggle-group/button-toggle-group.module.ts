import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';

import {ButtonToggleGroupDirective} from './button-toggle-group.directive';
import {ButtonToggleComponent} from './components/button-toggle/button-toggle.component';

@NgModule({
	imports: [
		CommonModule,
		MatButtonToggleModule,
		MatRippleModule,
		MatButtonModule
	],
	declarations: [ButtonToggleGroupDirective, ButtonToggleComponent],
	exports: [ButtonToggleGroupDirective, ButtonToggleComponent]
})
export class ButtonToggleGroupModule {}
