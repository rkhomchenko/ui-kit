import {Provider} from '@angular/core';
import {SessionService} from '@rkhomchenko/ui-kit/common';

import {sessionServiceMock} from './services/session.service';

export function provideServiceMocks(): Provider[] {
	return [{provide: SessionService, useValue: sessionServiceMock}];
}
