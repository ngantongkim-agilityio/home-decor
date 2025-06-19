import { createFont } from 'tamagui';
import { spacing } from './metrics';

const getFontFace = (fontFamily = 'Poppins') => ({
  normal: { normal: `${fontFamily}Regular`, italic: `${fontFamily}-Regular` },
  bold: { normal: `${fontFamily}Bold`, italic: `${fontFamily}-Bold` },
  400: { normal: `${fontFamily}Regular`, italic: `${fontFamily}-Regular` },
  600: { normal: `${fontFamily}SemiBold`, italic: `${fontFamily}-SemiBold` },
  700: { normal: `${fontFamily}Bold`, italic: `${fontFamily}-Bold` },
});

export const poppinsFont = createFont({
  size: {
    ...spacing,
    6: 15,
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  face: getFontFace('Poppins'),
});

export const leagueSpartanFont = createFont({
  size: {
    ...spacing,
    6: 15,
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  face: getFontFace('LeagueSpartan'),
});
