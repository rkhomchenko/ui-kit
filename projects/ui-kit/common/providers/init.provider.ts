import {APP_INITIALIZER, EnvironmentProviders, Provider} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

const ICONS_RESOLVER_PROVIDER: Provider = {
	provide: APP_INITIALIZER,
	multi: true,
	useFactory: (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
		return () => {
			const resolver = (name: string, namespace: string) =>
				sanitizer.bypassSecurityTrustResourceUrl(
					`/assets/icons/${namespace}${name}.svg`
				);

			iconRegistry.addSvgIconResolver(resolver);
		};
	},
	deps: [MatIconRegistry, DomSanitizer]
};

// const INIT_THEME_PROVIDER: Provider = {
// 	provide: APP_INITIALIZER,
// 	multi: true,
// 	useFactory: (themeService: ThemeService) => {
// 		return () => {
// 			const theme = themeService.getCurrentTheme();
//
// 			themeService.applyTheme(theme);
// 		};
// 	},
// 	deps: [ThemeService]
// };

export function provideAppInitializers(): Array<
	Provider | EnvironmentProviders
> {
	return [ICONS_RESOLVER_PROVIDER];
}
