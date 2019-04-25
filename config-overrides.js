/* config-overrides.js */
const rewireStyledComponents = require("react-app-rewire-styled-components");
const DynamicCDNWebpackPlugin = require("dynamic-cdn-webpack-plugin");
const { injectBabelPlugin } = require("react-app-rewired");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
// const rewirePreact = require("react-app-rewire-preact");
function rewirePreact(config, env) {
  config.resolve = {
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat",
      "create-react-class": "preact-compat/lib/create-react-class"
    }
  };
  return config;
}
function preloadAssets(config, env) {
  config.plugins = [...config.plugins, new PreloadWebpackPlugin()];
  return config;
}
function unpkgCDN(config, env) {
  config.plugins = [...config.plugins, new DynamicCDNWebpackPlugin()];
  return config;
}

function rewiredEmotionPluginOptions(
  config,
  env,
  styledComponentsPluginOptions = {}
) {
  return injectBabelPlugin(["emotion", styledComponentsPluginOptions], config);
}

module.exports = rewireStyledComponents;

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  if (env === "production") {
    console.log("⚡ Production build with Preact");
    config = rewirePreact(config, env);
    // unpkgCDN(config,env)
    config = preloadAssets(config, env);
  }

  config = rewireStyledComponents(config, env);
  // config = rewiredEmotionPluginOptions(config, env);
  return config;
};
