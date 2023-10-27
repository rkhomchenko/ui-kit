import {Meta, moduleMetadata, StoryFn} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {MatSlideToggle, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {BaseControlArgs, BaseControlArgTypes, LABEL_POSITION} from "../utils";

export default {
	title: "Components/Angular Material/Switch",
	component: MatSlideToggle,
	tags: ["autodocs"],
	decorators: [
		moduleMetadata({
			imports: [CommonModule, MatSlideToggleModule]
		})
	],
	args: {
		...BaseControlArgs,
		checked: false,
		hideIcon: false,
		labelPosition: LABEL_POSITION.AFTER
	},
	argTypes: {
		...BaseControlArgTypes,
		labelPosition: {control: "select", options: Object.values(LABEL_POSITION)}
	}
} as Meta;


export const Basic: StoryFn<MatSlideToggle> = (args) => ({
	template: `
    <mat-slide-toggle [color]="color"
                      [disabled]="disabled"
                      [disableRipple]="disableRipple"
                      [checked]="checked"
                      [hideIcon]="hideIcon"
                      [labelPosition]="labelPosition"
    >{{label}}</mat-slide-toggle>
  `,
	props: args
});
