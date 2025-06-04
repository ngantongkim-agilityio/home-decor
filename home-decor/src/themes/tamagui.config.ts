import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui, createTokens } from 'tamagui';

import { colors, metrics, systemFont } from '@/themes';

const { size, space, zIndex, radius } = metrics;

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  fonts: {
    body: systemFont,
    heading: systemFont,
  },
  tokens: createTokens({ color: colors, space, size, radius, zIndex }),
});

export default tamaguiConfig;

export type Conf = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
