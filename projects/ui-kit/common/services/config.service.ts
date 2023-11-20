import {Injectable} from '@angular/core';

import {AppType, Environment} from '../models/environment.interface';

@Injectable({providedIn: 'root'})
export class ConfigService {
	static environment: Environment;
	static appName?: AppType;
}
