import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

export const spacing = {
  px: 1,
  '0': 0,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '1.75': 7,
  '2': 8,
  '2.5': 10,
  '3': 12,
  '3.5': 14,
  '4': 16,
  '4.5': 18,
  '5': 20,
  '5.5': 22,
  '6': 24,
  '6.5': 27,
  '7': 28,
  '7.5': 30,
  '8': 32,
  '8.5': 34,
  '9': 36,
  '9.5': 38,
  '10': 40,
  '10.5': 42,
  '11': 45,
  '12': 48,
  '12.5': 50,
  '13': 52,
  '14': 56,
  '15': 60,
  '16': 64,
  '20': 80,
  true: 4,
} as const;

export const metrics = {
  screenHeight,
  screenWidth,
  marginBottomScreen: 34,
  padding: {},
  margin: {},
  space: {
    ...spacing,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
  },
  border: {},
  radius: {
    ...spacing,
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    true: 5,
    '2xl': 16,
    '3xl': 24,
    '4xl': 26,
    circle: '50%',
  },
  shadowOffset: {},
  size: {
    ...spacing,
    screenHeight,
    screenWidth,
    full: '100%',
    inputHeightMedium: 56,
  } as const,
};
