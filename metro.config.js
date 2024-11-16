const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

config.resolver.sourceExts.push("mjs");

const { withNativeWind } = require("nativewind/metro");
module.exports = withNativeWind(config, {
  input: "./global.css",
});
