module.exports = function (api) {
    api.cache(true)
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          '@tamagui/babel-plugin',
          {
            components: ['tamagui'],
            config: './src/themes/tamagui.config.ts',
            logTimings: true,
            disableExtraction: process.env.NODE_ENV === 'development',
          },
        ],
        [
          'babel-plugin-module-resolver',
          {
            root: ['.'],
            alias: {
              '@*': './*',
            },
          },
        ],
        // NOTE: this is only necessary if you are using reanimated for animations
        'react-native-reanimated/plugin',
      ],
    }
  }
