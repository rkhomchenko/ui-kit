import {Meta, StoryFn} from "@storybook/angular";
import {ErrorStateMatcherStub, validationStub} from "../utils";
import {FormControl} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";

export default {
	title: "Components/Angular Material/Text Field",
	component: MatFormField,
	tags: ["autodocs"]
	// decorators: [
	// 	applicationConfig({
	// 		providers: [
	// 			provideAnimations(),
	// 			{
	// 				provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
	// 				useValue: {
	// 					appearance: 'outline',
	// 					color: 'primary',
	// 					floatLabel: 'auto'
	// 				} as MatFormFieldDefaultOptions
	// 			}
	// 		]
	// 	}),
	// 	moduleMetadata({
	// 		imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule]
	// 	})
	// ],
	// args: {
	// 	label: 'Label',
	// 	icon: 'visibility',
	// 	disabled: false
	// }
} as Meta;

export const Default: StoryFn<MatFormField> = (args) => ({
	props: args
});

Default.args = {
	label: "My awesome label",
	error: "The field is required!",
	color: "accent"
};


// export const BasicInput: StoryFn<MatFormField> = (args) => {
// 	return {
// 		template: `
//     <mat-form-field color="accent">
//       <mat-label>{{label}}</mat-label>
//       <input [disabled]="disabled" matInput type="text">
//     </mat-form-field>
//   `,
// 		props: args
// 	};
// };
//
// BasicInput.storyName = 'Basic input';
//
export const InvalidInput: StoryFn = ({value, disabled, ...args}: any) => {
	const control = new FormControl({value, disabled}, validationStub);
	const matcher = new ErrorStateMatcherStub();

	// control.setErrors({error: true});

	return {
		template: `
    <mat-form-field>
      <mat-label>{{label}}</mat-label>
      <input type="text"
             matInput
             [formControl]="control"
             [errorStateMatcher]="matcher">
      <mat-error *ngIf="control.invalid">{{error}}</mat-error>
    </mat-form-field>
  `,
		props: {
			matcher, control, ...args
		}
	};
};
//
// InvalidInput.args = {
// 	value: 'Input text',
// 	error: 'Error message'
// };
//
// export const InputWithHint: StoryFn<MatFormField> = (args) => ({
// 	template: `
//     <mat-form-field>
//       <mat-label>{{label}}</mat-label>
//       <input matInput type="text">
//       <mat-hint>{{hint}}</mat-hint>
//     </mat-form-field>
//   `,
// 	props: args
// });
//
// const InputWithHintOptions: StoryAnnotations = {
// 	storyName: 'Input with hint',
// 	args: {
// 		hint: 'Hint text'
// 	}
// };
// Object.assign(InputWithHint, InputWithHintOptions);
//
// export const InputWithIcon: StoryFn<MatFormField> = (args) => ({
// 	template: `
//     <mat-form-field>
//       <mat-label>{{label}}</mat-label>
//       <input matInput type="text">
//       <mat-icon matSuffix>{{icon}}</mat-icon>
//     </mat-form-field>
//   `,
// 	props: args
// });
//
// InputWithIcon.storyName = 'Input with icon';
// export const InputWithHintAndIcon: StoryFn<MatFormField> = (args) => ({
// 	template: `
//      <mat-form-field>
//       <mat-label>{{label}}</mat-label>
//       <input matInput type="text">
//       <mat-icon matSuffix>{{icon}}</mat-icon>
//       <mat-hint>{{hint}}</mat-hint>
//     </mat-form-field>
//   `,
// 	props: args
// });
//
// InputWithHintAndIcon.storyName = 'Input with hint and icon';
