/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import * as tailwindcss from "../tailwind.config";
const path = require("path");

const config = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/preset-create-react-app",
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	staticDirs: ["../public"],
	docs: {
		autodocs: true,
	},
	webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
export default config;
