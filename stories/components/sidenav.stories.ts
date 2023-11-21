import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {NavLinkComponent, SidenavModule} from '@rkhomchenko/ui-kit/components';
import {SidenavComponent} from '@rkhomchenko/ui-kit/components/sidenav/sidenav.component';
import {Meta, moduleMetadata, StoryFn} from '@storybook/angular';

import {RouterStubComponent} from '../utils/stubs';

export default {
	title: 'Components/Angular Material/Sidenav',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [
				CommonModule,
				RouterTestingModule.withRoutes([
					{
						path: '**',
						component: RouterStubComponent
					}
				]),
				SidenavModule,
				MatListModule,
				MatIconModule,
				TranslateModule
			]
		})
	]
} as Meta;

export const NavLink: StoryFn<NavLinkComponent> = args => ({
	props: args,
	template: `
			<mat-list>
				<q9-navigation-link
					[ref]="link.ref"
					[icon]="link.icon" 
					*ngFor="let link of links">
						{{link.label | translate}}
				</q9-navigation-link>
			</mat-list>
	`
});

NavLink.args = {
	links: [
		{icon: 'home', label: 'Home', ref: 'home'},
		{icon: 'processes', label: 'Processes', ref: 'processes'}
	]
} as Partial<NavLinkComponent>;

export const SideNav: StoryFn<SidenavComponent> = args => ({
	props: args,
	template: `
		<div class="sb-sidenav-container">
			<q9-navigation-sidebar>
				<q9-navigation-link
					[ref]="link.ref"
					[icon]="link.icon" 
					*ngFor="let link of links">
						{{link.label | translate}}
				</q9-navigation-link>
				
				<div class="sb-sidenav-content">
					<router-outlet></router-outlet>
					
					Content
				</div>
			</q9-navigation-sidebar>	
		</div>
	`
});

SideNav.args = {
	links: [
		{icon: 'home', label: 'Home', ref: 'home'},
		{icon: 'processes', label: 'Processes', ref: 'processes'},
		{icon: 'architecture', label: 'Architecture', ref: 'architecture'},
		{icon: 'changes', label: 'Changes', ref: 'changes'},
		{icon: 'sf_orgs', label: 'Salesforce Orgs', ref: 'salesforce orgs'},
		{icon: 'ref_models', label: 'Ref Models', ref: 'refmodels'},
		{icon: 'url_library', label: 'URL Library', ref: 'urllibrary'},
		{icon: 'releases', label: 'Releases', ref: 'releases'}
	]
} as Partial<SidenavComponent>;
