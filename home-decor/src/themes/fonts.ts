import { createFont } from 'tamagui';

const getFontFace = (fontFamily = 'Poppins') => ({
  normal: { normal: `${fontFamily}Regular`, italic: `${fontFamily}-Regular` },
  bold: { normal: `${fontFamily}Bold`, italic: `${fontFamily}-Bold` },
  400: { normal: `${fontFamily}Regular`, italic: `${fontFamily}-Regular` },
  600: { normal: `${fontFamily}SemiBold`, italic: `${fontFamily}-SemiBold` },
  700: { normal: `${fontFamily}Bold`, italic: `${fontFamily}-Bold` },
});

export const poppinsFont = createFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: getFontFace('Poppins'),
});

export const leagueSpartanFont = createFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: getFontFace('LeagueSpartan'),
});
