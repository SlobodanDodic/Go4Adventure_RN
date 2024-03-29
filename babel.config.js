module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      [
        "module:react-native-dotenv",
        {
          safe: true,
        },
      ],
      // [
      //   "@stripe/stripe-react-native",
      //   {
      //     merchantIdentifier: string | string[string],
      //     enableGooglePay: boolean,
      //   },
      // ],
    ],
  };
};
