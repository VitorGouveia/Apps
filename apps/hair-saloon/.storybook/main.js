module.exports = {
  async viteFinal(config, { configType }) {
    // customize the Vite config here

    // return the customized config
    return {
      ...config,
      define: {
        ...config.define,
        global: "window",
      },
    };
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
};
