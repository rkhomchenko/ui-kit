import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {SelectComponent, SelectModule} from '@q9elements/ui-kit/components';
import {Meta, moduleMetadata, StoryFn} from '@storybook/angular';

export default {
	title: 'Components/Angular Material/Select',
	tags: ['autodocs'],
	component: SelectComponent,
	decorators: [
		moduleMetadata({
			imports: [CommonModule, FormsModule, SelectModule, MatIconModule]
		})
	]
} as Meta;

export const Default: StoryFn = args => ({
	props: args,
	template: `
	<q9-select
		[ngModel]="2"
		(ngModelChange)="onChange($event)"
	  [label]="label"
		[hint]="hint"
		[multiple]="multiple"
		[color]="color" 
	>
		<q9-option *ngFor="let value of values" [value]="value">
			Option {{ value }}
		</q9-option>
	</q9-select>
	`
});

Default.args = {
	label: 'Label',
	hint: 'Hint',
	multiple: false,
	color: 'primary',
	values: [1, 2, 3]
};

Default.argTypes = {
	onChange: {action: 'changed'}
};
