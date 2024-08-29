/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    // resolver: {
    //   resolveRequest: (context, moduleName, platform) => {
    //     if (moduleName === 'crypto') {
    //       return context.resolveRequest(
    //         context,
    //         'react-native-quick-crypto',
    //         platform,
    //       );
    //     }
    //     return context.resolveRequest(context, moduleName, platform);
    //   },
    // },
  },
};
