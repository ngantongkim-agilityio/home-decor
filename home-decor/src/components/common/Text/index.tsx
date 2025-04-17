import { Text as TextBase, styled } from 'tamagui';

export const Text = styled(TextBase, {
  color: '$primary',
  textDecorationLine: 'none',
  variants: {
    size: {
      small: {
        fontSize: '$3',
        lineHeight: 15,
      },

      medium: {
        fontSize: '$4',
        lineHeight: 17,
      },

      large: {
        fontSize: '$5',
        lineHeight: 22,
      },

      extraLarge: {
        fontSize: '$6',
        lineHeight: 24,
      },
    },

    variant: {
      primary: {
        color: '$primary',
      },

      secondary: {
        color: '$tertiary',
      },

      subTitle: {
        color: '$secondary',
      },

      error: {
        color: '$textError',
      },
    },

    regular: {
      true: {
        fontFamily: '$body',
        fontWeight: 'normal',
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
    regular: true,
  },
});
