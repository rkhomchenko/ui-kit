import {THEME_PALETTE} from "./enums";

export const BaseControlArgs = {
	label: "Label",
	color: THEME_PALETTE.PRIMARY,
	disabled: false,
	disableRipple: false
};

export const BaseControlArgTypes = {
	label: {
		description: "Component label",
		control: "text"
	},
	color: {
		description: "Theme color palette for the component.",
		options: Object.values(THEME_PALETTE),
		control: "select"
	},
	disabled: {control: "boolean"},
	disableRipple: {control: "boolean"}
};
