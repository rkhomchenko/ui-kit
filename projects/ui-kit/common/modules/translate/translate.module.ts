import {NgModule} from '@angular/core';
import {
	TranslateLoader,
	TranslateModule,
	TranslateService
} from '@ngx-translate/core';

import {CachedHttpTranslationLoader} from './translate.loader';

@NgModule({
	imports: [
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			useDefaultLang: true,
			loader: {
				provide: TranslateLoader,
				useClass: CachedHttpTranslationLoader
			}
		})
	]
})
export class TranslateRootModule {
	constructor(private translateService: TranslateService) {
		translateService.currentLang = '';
		translateService.use('en');
	}
}
