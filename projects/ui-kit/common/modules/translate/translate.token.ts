import {InjectionToken} from '@angular/core';

export interface TranslateModuleConfig {
	prefix: string;
	suffix: string;
}

export const Q9_TRANSLATE_CONFIG = new InjectionToken<TranslateModuleConfig>(
	'Q9_TRANSLATE_CONFIG',
	{factory: () => ({prefix: './../assets/translations/', suffix: '.json'})}
);
