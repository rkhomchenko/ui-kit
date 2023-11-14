import {Component, Input, TemplateRef, ViewChild} from '@angular/core';

@Component({
	selector: 'q9-option',
	template: `
		<ng-template #content>
			<ng-content></ng-content>
		</ng-template>
	`
})
export class OptionComponent {
	@Input() value: any;
	@Input() disabled: boolean;

	@ViewChild('content') content: TemplateRef<any>;
}
