import {setCompodocJson} from "@storybook/addon-docs/angular";
import {withThemeByClassName} from "@storybook/addon-themes";

import docJson from "../documentation.json";
import "../projects/ui-kit/src/styles/index.scss";

setCompodocJson(docJson);

const themeClasses = ["q9-light", "q9-dark"];

//TODO: configure global decorators
//decorators: [
//     applicationConfig({
//       providers: [
//         provideAnimations(),
//         {
//           provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
//           useValue: {
//             appearance: "outline",
//             color: "primary",
//             floatLabel: "auto"
//           } as MatFormFieldDefaultOptions
//         }
//       ]
//     }),
//     moduleMetadata({
//       imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatIconModule]
//     })
//   ],

export const decorators = [
  withThemeByClassName({
    themes: themeClasses.reduce(
      (obj, value) => ({...obj, [value]: `${value} mat-app-background mat-typography`}), {}
    ),
    defaultTheme: themeClasses[0]
  })
];

export const parameters = {
  actions: {argTypesRegex: "^on.*"}
};
