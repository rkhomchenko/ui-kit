import {Meta, moduleMetadata, StoryFn} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

export default {
	title: "Components/Angular Material/Button",
	component: MatButton,
	tags: ["autodocs"],
	decorators: [
		moduleMetadata({
			imports: [CommonModule, MatButtonModule, MatIconModule]
		})
	],
	args: {
		icon: "home",
		label: "Button",
		color: "primary",
		disabled: false,
		disableRipple: false
	},
	argTypes: {
		icon: {
			description: "Button icon",
			control: "text"
		},
		label: {
			description: "Button label",
			control: "text"
		},
		color: {
			description: "Theme color palette for the button.",
			options: [null, "primary", "accent", "warn"],
			control: "select"
		},
		disabled: {
			description: "Whether the button is disabled.",
			control: "boolean"
		},
		disableRipple: {
			description: "Whether ripples are disabled.",
			control: "boolean"
		},
		onClick: {action: "clicked"}
	}
} as Meta;

export const Flat: StoryFn<MatButton> = (args) => ({
	template: `
  <button mat-flat-button
          [color]="color"
          [disabled]="disabled"
          (click)="onClick($event)"
          [disableRipple]="disableRipple">{{label}}</button>
  `,
	props: args
});

export const Stroked: StoryFn<MatButton> = (args) => ({
	template: `
  <button mat-stroked-button
          [color]="color"
          [disabled]="disabled"
          (click)="onClick($event)"
          [disableRipple]="disableRipple">{{label}}</button>
  `,
	props: args
});

export const Basic: StoryFn<MatButton> = (args) => ({
	template: `
  <button mat-button
          [color]="color"
          [disabled]="disabled"
          (click)="onClick($event)"
          [disableRipple]="disableRipple">{{label}}</button>
  `,
	props: args
});

export const Raised: StoryFn<MatButton> = (args) => ({
	template: `
  <button mat-raised-button
          [color]="color"
          [disabled]="disabled"
          (click)="onClick($event)"
          [disableRipple]="disableRipple">{{label}}</button>
  `,
	props: args
});


export const Icon: StoryFn<MatButton> = (args) => ({
	template: `
  <button mat-icon-button
          [color]="color"
          [disabled]="disabled"
          (click)="onClick($event)"
          [disableRipple]="disableRipple">
          <mat-icon>{{ icon }}</mat-icon>
  </button>
  `,
	props: args
});
export const FAB: StoryFn<MatButton> = (args) => ({
	template: `
  <button mat-fab
          [color]="color"
          [disabled]="disabled"
          (click)="onClick($event)"
          [disableRipple]="disableRipple">
          <mat-icon>{{ icon }}</mat-icon>
  </button>
  `,
	props: args
});
export const MiniFAB: StoryFn<MatButton> = (args) => ({
	template: `
  <button mat-mini-fab
          [color]="color"
          [disabled]="disabled"
          (click)="onClick($event)"
          [disableRipple]="disableRipple">
          <mat-icon>{{ icon }}</mat-icon>
  </button>
  `,
	props: args
});

export const ExtendedFAB: StoryFn<MatButton> = (args) => ({
	template: `
  <button mat-fab extended
          [color]="color"
          [disabled]="disabled"
          (click)="onClick($event)"
          [disableRipple]="disableRipple">
          <mat-icon>{{ icon }}</mat-icon>
          {{ label }}
  </button>
  `,
	props: args
});
