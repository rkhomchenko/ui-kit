import {Component, OnInit} from '@angular/core';
import {SessionService, UserSettingsService} from '@q9elements/ui-kit/common';

@Component({
	selector: 'q9-navigation-sidebar',
	host: {
		'[class.closed]': '!opened'
	},
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
	public opened = true;

	constructor(
		private userSettingsService: UserSettingsService,
		private sessionService: SessionService
	) {}

	ngOnInit() {
		this.opened = this.userSettingsService.getSettingsByKey('sidenav', true);
	}

	toggleSidenav() {
		this.opened = !this.opened;

		this.userSettingsService.updateSettingsByKey('sidenav', this.opened);
	}

	getTooltipText(opened: boolean) {
		return `CORE.UI_KIT.${opened ? 'COLLAPSE_MENU' : 'EXPAND_MENU'}`;
	}

	getIconName(opened: boolean) {
		return opened ? 'arrow_left' : 'arrow_right';
	}
}
