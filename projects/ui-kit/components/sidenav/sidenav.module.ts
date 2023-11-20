import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {Q9TransformPipe} from '@q9elements/ui-kit/common';

import {NavLinkComponent} from './components/nav-link/nav-link.component';
import {SidenavComponent} from './sidenav.component';

@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule,
		MatListModule,
		MatRippleModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
		RouterLinkActive,
		RouterLink,
		TranslateModule,
		Q9TransformPipe
	],
	declarations: [SidenavComponent, NavLinkComponent],
	exports: [SidenavComponent, NavLinkComponent]
})
export class SidenavModule {}
