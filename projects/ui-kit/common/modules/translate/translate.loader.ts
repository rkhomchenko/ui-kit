import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {TranslateLoader} from '@ngx-translate/core';
import {Observable, shareReplay} from 'rxjs';

import {Q9_TRANSLATE_CONFIG, TranslateModuleConfig} from './translate.token';

@Injectable()
export class CachedHttpTranslationLoader implements TranslateLoader {
	cache$: Observable<any>;
	cachedLang: string;

	constructor(
		private http: HttpClient,
		@Inject(Q9_TRANSLATE_CONFIG) private config: TranslateModuleConfig
	) {}

	public getTranslation(lang: string): Observable<any> {
		const {prefix, suffix} = this.config;

		if (!this.cache$ || this.cachedLang !== lang) {
			this.cache$ = this.http
				.get(`${prefix}${lang}${suffix}`)
				.pipe(shareReplay(1));
			this.cachedLang = lang;
		}
		return this.cache$;
	}
}
