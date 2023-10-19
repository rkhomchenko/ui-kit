import type {StorybookConfig} from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../projects/ui-kit/src/**/*.mdx",
    "../projects/ui-kit/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation'
  }
};
export default config;
