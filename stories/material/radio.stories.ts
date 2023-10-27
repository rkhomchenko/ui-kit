import {Meta, moduleMetadata, StoryFn} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {MatRadioButton, MatRadioGroup, MatRadioModule} from "@angular/material/radio";
import {BaseControlArgs, BaseControlArgTypes, LABEL_POSITION} from "../utils";
import {times} from "lodash";
import {FormsModule} from "@angular/forms";

const options = times(3, (i) => ({label: `Option ${++i}`, value: i}));

export default {
	title: "Components/Angular Material/Radio Button",
	component: MatRadioButton,
	tags: ["autodocs"],
	decorators: [
		moduleMetadata({
			imports: [CommonModule, FormsModule, MatRadioModule]
		})
	],
	args: {
		...BaseControlArgs,
		required: false,
		value: options[0].value,
		labelPosition: LABEL_POSITION.AFTER
	},
	argTypes: {
		...BaseControlArgTypes,
		labelPosition: {control: "select", options: Object.values(LABEL_POSITION)},
		onChange: {action: "changed"}
	}
} as Meta;


export const Basic: StoryFn<MatRadioButton> = (args) => ({
	template: `
    <mat-radio-button [color]="color"
                      [disableRipple]="disableRipple"
                      [disabled]="disabled"
                      (change)="onChange($event)"
                      [checked]="checked"
                      [required]="required"
                      [value]="value"
                      [labelPosition]="labelPosition">{{label}}</mat-radio-button>
  `,
	props: args
});

Basic.args = {
	checked: true
};

Basic.argTypes = {
	checked: {control: "boolean", description: "Theme color palette for the button."}
};

export const Group: StoryFn<MatRadioGroup | any> = (args) => ({
	template: `
    <label id="example-radio-group-label">Select an option</label>
    <mat-radio-group [(ngModel)]="value"
                     [color]="color"
                     [disabled]="disabled"
                     [labelPosition]="labelPosition"
                     [required]="required"
                     (change)="onChange($event)"
                     class="example-radio-group">
      <mat-radio-button *ngFor="let option of options" [value]="option.value">{{option.label}}</mat-radio-button>
    </mat-radio-group>
    <div>Selected option is: {{value}}</div>
  `,
	styles: [
		`.example-radio-group {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        align-items: flex-start;
      }

      .example-radio-button {
        margin: 5px;
      }`
	],
	props: args
});

Group.args = {
	options
};
