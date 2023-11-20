import {Component, Input, Optional} from '@angular/core';
import {SidenavComponent} from '@q9elements/ui-kit/components';

@Component({
	selector: 'q9-navigation-link',
	templateUrl: './nav-link.component.html',
	styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
	@Input() ref: string;
	@Input() icon: string;

	constructor(@Optional() public sidenav: SidenavComponent) {}
}
