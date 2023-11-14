import {
	ButtonToggleGroupModule,
	IconToggleGroupModule
} from '@q9elements/ui-kit/components';
import {Meta, moduleMetadata, StoryFn} from '@storybook/angular';

export default {
	title: 'Components/Angular Material/Toggles',
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [IconToggleGroupModule, ButtonToggleGroupModule]
		})
	],
	argTypes: {
		onChange: {
			control: {action: 'changed'}
		}
	}
} as Meta;

export const IconToggle: StoryFn = args => ({
	props: args,
	template: `
	<q9-icon-toggle-group (change)="onChange($event)" value="grid">
		<q9-icon-toggle value="grid" icon="apps"></q9-icon-toggle>
		<q9-icon-toggle value="list" icon="list"></q9-icon-toggle>
	</q9-icon-toggle-group>
		`
});

export const ButtonToggle: StoryFn = args => ({
	props: args,
	template: `
	<q9-button-toggle-group (change)="onChange($event)" value="grid">
		<q9-button-toggle value="basic">Basic</q9-button-toggle>
		<q9-button-toggle [checked]="true" value="owners">Owners</q9-button-toggle>
		<q9-button-toggle value="users">Users</q9-button-toggle>
	</q9-button-toggle-group>
		`
});
