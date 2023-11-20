import {APP_INITIALIZER, Injector} from '@angular/core';

export function injectInjectorToProps() {
	return (storyFn: any) => {
		const story = storyFn();

		if (!story.applicationConfig) {
			story.applicationConfig = {providers: []};
		}

		story.applicationConfig.providers.push({
			provide: APP_INITIALIZER,
			multi: true,
			useFactory: (injector: Injector) => {
				return () => {
					console.log(story);
					if (!story.props) {
						story.props = {injector};
					}
					Object.assign(story.props, {injector});
				};
			},
			deps: [Injector]
		});

		return story;
	};
}
