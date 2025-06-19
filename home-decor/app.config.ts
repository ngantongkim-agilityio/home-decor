import { ExpoConfig, ConfigContext } from '@expo/config';

const variantSystem = {
  preview: {
    name: 'Home Decor (Preview)',
    slug: 'home-decor-preview',
    version: '1.0.1',
    scheme: 'com.homedecorapp',
    bundleId: 'com.ngantong.homedecor.dev',
    icon: './assets/images/icon.png',
    ios_icon: './assets/images/logo-icon.png',
    android_icon: './assets/images/logo-adaptive-icon.png',
    android_bg_color: '#f4b5a4',
  },
  development: {
    name: 'Home Decor (Dev)',
    slug: 'home-decor-dev',
    version: '1.0.1',
    scheme: 'com.homedecorapp',
    bundleId: 'com.ngantong.homedecor.dev',
    icon: './assets/images/icon.png',
    ios_icon: './assets/images/logo-icon.png',
    android_icon: './assets/images/logo-adaptive-icon.png',
    android_bg_color: '#f4b5a4',
  },
  production: {
    name: 'Home Decor',
    slug: 'home-decor-prod',
    version: '1.0.1',
    scheme: 'com.homedecorapp',
    bundleId: 'com.ngantong.homedecor.prod',
    icon: './assets/images/icon.png',
    ios_icon: './assets/images/logo-icon.png',
    android_icon: './assets/images/logo-adaptive-icon.png',
    android_bg_color: '#f4b5a4',
  },
};

export default ({ config }: ConfigContext): ExpoConfig => {
  const VARIANT = (process.env.APP_VARIANT || 'development') as keyof typeof variantSystem;

  return {
    ...config,
    name: process.env.APP_NAME || variantSystem[VARIANT].name,
    slug: process.env.APP_SLUG || variantSystem[VARIANT].slug,
    version: process.env.APP_VERSION || variantSystem[VARIANT].version,
    scheme: process.env.APP_SCHEME || variantSystem[VARIANT].scheme,
    orientation: 'portrait',
    icon: variantSystem[VARIANT].icon,
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: process.env.APP_BUNDLE_ID || variantSystem[VARIANT].bundleId,
      icon: {
        dark: process.env.APP_IOS_ICON || variantSystem[VARIANT].ios_icon,
        light: process.env.APP_IOS_ICON || variantSystem[VARIANT].ios_icon,
        tinted: process.env.APP_IOS_ICON || variantSystem[VARIANT].ios_icon,
      },
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage:
          process.env.APP_ANDROID_ICON || variantSystem[VARIANT].android_icon,
        backgroundColor: variantSystem[VARIANT].android_bg_color,
      },
      package: process.env.APP_BUNDLE_ID || variantSystem[VARIANT].bundleId,
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      'expo-font',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          resizeMode: 'contain',
          backgroundColor: '#f4b5a4',
          imageWidth: 300,
        },
      ],
      [
        'expo-notifications',
        {
          icon: './assets/images/notification-icon.png',
          color: '#363130',
          defaultChannel: 'default',
          enableBackgroundRemoteNotifications: false,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: 'cc894ddd-4264-4b60-b40b-0297b7a0f83c',
      },
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    updates: {
      url: 'https://u.expo.dev/cc894ddd-4264-4b60-b40b-0297b7a0f83c',
    },
    owner: 'ngantong',
  };
};
