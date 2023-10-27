import type {StorybookConfig} from "@storybook/angular";

const config: StorybookConfig = {
  stories: [
    "../projects/ui-kit/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../projects/ui-kit/src/**/*.mdx",
    "../stories/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [{
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require.resolve("sass"),
                sassOptions: {
                  includePaths: ["node_modules"]
                }
              }
            }
          ]
        }]
      }
    }
  ],
  framework: {
    name: "@storybook/angular",
    options: {}
  }
};
export default config;
