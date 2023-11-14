import {Component} from '@angular/core';

@Component({
	selector: 'q9-navigation-sidebar',
	host: {
		'[class.closed]': '!opened'
	},
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
	public opened = true;
}
