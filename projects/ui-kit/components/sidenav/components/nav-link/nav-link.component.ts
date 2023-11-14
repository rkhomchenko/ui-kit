import {Component, Input} from '@angular/core';

@Component({
	selector: 'q9-navigation-link',
	templateUrl: './nav-link.component.html',
	styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
	@Input() ref: string;
	@Input() icon: string;
}
