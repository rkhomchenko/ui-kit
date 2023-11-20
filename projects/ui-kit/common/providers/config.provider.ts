import {APP_INITIALIZER, Provider} from '@angular/core';

import {AppType, Environment} from '../models/environment.interface';
import {ConfigService} from '../services/config.service';

export function provideConfig(
	environment: Environment,
	appName?: AppType
): Provider {
	return {
		provide: APP_INITIALIZER,
		multi: true,
		useFactory: () => {
			return () => {
				ConfigService.environment = environment;
				ConfigService.appName = appName;
			};
		}
	};
}
