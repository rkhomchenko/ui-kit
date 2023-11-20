import {CommonModule} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {provideAnimations} from '@angular/platform-browser/animations';

import {TranslateRootModule} from './translate/translate.module';
import {provideAppInitializers} from '../providers/init.provider';
import {provideMaterialSettings} from '../providers/material.provider';

@NgModule({
	imports: [CommonModule, TranslateRootModule],
	providers: [
		provideAppInitializers(),
		provideMaterialSettings(),
		provideAnimations(),
		provideHttpClient()
	],
	exports: []
})
export class CoreModule {}
