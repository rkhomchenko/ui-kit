import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import {IconToggleComponent} from './components/icon-toggle/icon-toggle.component';
import {IconToggleGroupComponent} from './icon-toggle-group.component';

@NgModule({
	imports: [
		CommonModule,
		MatButtonToggleModule,
		MatRippleModule,
		MatIconModule,
		MatButtonModule
	],
	declarations: [IconToggleGroupComponent, IconToggleComponent],
	exports: [IconToggleGroupComponent, IconToggleComponent]
})
export class IconToggleGroupModule {}
