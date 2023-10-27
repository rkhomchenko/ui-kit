import {applicationConfig, Meta, moduleMetadata, StoryFn} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {
	MAT_FORM_FIELD_DEFAULT_OPTIONS,
	MatFormFieldDefaultOptions,
	MatFormFieldModule
} from "@angular/material/form-field";
import {constant, times} from "lodash";
import {provideAnimations} from "@angular/platform-browser/animations";

const options = times(20, constant("Item"));

export default {
	title: "Components/Angular Material/Select",
	component: MatSelect,
	tags: ["autodocs"],
	decorators: [
		applicationConfig({
			providers: [
				provideAnimations(),
				{
					provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
					useValue: {
						appearance: "outline",
						color: "primary",
						floatLabel: "auto"
					} as MatFormFieldDefaultOptions
				}
			]
		}),
		moduleMetadata({
			imports: [CommonModule, MatSelectModule, MatFormFieldModule]
		})
	],
	args: {
		label: "Label",
		options
	},
	argTypes: {}
} as Meta;

export const Basic: StoryFn<MatSelect> = (args) => ({
	template: `
    <mat-form-field>
      <mat-label>{{label}}</mat-label>
      <mat-select>
          <mat-option *ngFor="let item of options; index as i" [value]="i">
              {{item}} {{i}}
          </mat-option>
      </mat-select>
    </mat-form-field>
  `,
	props: args
});
