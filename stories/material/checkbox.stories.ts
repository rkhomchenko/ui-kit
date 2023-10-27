import {Meta, moduleMetadata, StoryFn} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {BaseControlArgs, BaseControlArgTypes, LABEL_POSITION} from "../utils";

export default {
	title: "Components/Angular Material/Checkbox",
	component: MatCheckbox,
	tags: ["autodocs"],
	decorators: [
		moduleMetadata({
			imports: [CommonModule, MatCheckboxModule]
		})
	],
	args: {
		...BaseControlArgs,
		checked: true,
		indeterminate: false,
		labelPosition: LABEL_POSITION.AFTER
	},
	argTypes: {
		...BaseControlArgTypes,
		checked: {control: "boolean"},
		indeterminate: {control: "boolean"},
		labelPosition: {
			options: Object.values(LABEL_POSITION),
			control: "select"
		},
		onChange: {action: "changed"}
	}
} as Meta;

export const Basic: StoryFn<MatCheckbox> = (args) => ({
	template: `<mat-checkbox [color]="color"
                          [checked]="checked"
                          [indeterminate]="indeterminate"
                          [disabled]="disabled"
                          [disableRipple]="disableRipple"
                          [labelPosition]="labelPosition"
                          (change)="onChange($event)">{{label}}</mat-checkbox>
  `,
	props: args
});
