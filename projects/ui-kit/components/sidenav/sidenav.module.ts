import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SidenavComponent} from '@q9elements/ui-kit/components';
import {NavLinkComponent} from '@q9elements/ui-kit/components/sidenav/components/nav-link/nav-link.component';

@NgModule({
	imports: [
		CommonModule,
		MatSidenavModule,
		MatListModule,
		MatRippleModule,
		MatIconModule,
		MatButtonModule,
		RouterLinkActive,
		RouterLink
	],
	declarations: [SidenavComponent, NavLinkComponent],
	exports: [SidenavComponent, NavLinkComponent]
})
export class SidenavModule {}
