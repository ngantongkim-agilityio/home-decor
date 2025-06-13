import { ComponentProps, ReactNode, forwardRef, memo } from 'react';
import { Spinner, XStack, Button as BaseButton } from 'tamagui';
import { TouchableOpacity } from 'react-native';
import {
  styled,
  createStyledContext,
  withStaticProperties,
} from '@tamagui/core';
import { Text } from '../Text';

const ButtonContext = createStyledContext({
  variant: 'primary',
});

const ButtonFrame = styled(XStack, {
  context: ButtonContext,
  name: 'Button',
  tag: 'button',
  height: 41,
  cursor: 'pointer',
  borderWidth: 0,
  justify: 'center',
  items: 'center',
  gap: '$2.5',
  disabledStyle: {
    opacity: 0.5,
  },
  variants: {
    variant: {
      primary: {
        borderRadius: 50,
        backgroundColor: '$primary',
      },
      secondary: {
        borderRadius: 50,
        backgroundColor: '$bgSecondary',
      },
      outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$dark',
        borderRadius: 8,
      },
    },
    loading: {
      true: {},
    },
    fit: {
      false: {
        width: '$full',
      },
      true: {
        width: 'auto',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
    fit: false,
  },
});

const ButtonText = styled(Text, {
  context: ButtonContext,
  fontSize: '$6',
  fontFamily: '$body',
  fontWeight: 'bold',
  lineHeight: 21,
  variants: {
    variant: {
      primary: {
        color: '$secondary',
      },

      secondary: {
        color: '$quaternary',
      },

      round: {},
      bigRound: {},
      smallRound: {},

      outline: {
        lineHeight: 17,
        color: '$textError',
      },

      ghost: {
        fontWeight: 'normal',
        color: '$textSecondary',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
  },
});

const ButtonIcon = styled(
  Text,
  {
    context: ButtonContext,
    asChild: true,
    width: '$6.5',
    height: '$6.5',
    variants: {
      variant: {
        primary: {
          color: '$primary',
        },

        secondary: {},

        round: {},
        bigRound: {},
        smallRound: {},

        outline: {
          width: '$5.5',
          height: '$5',
        },

        ghost: {},
      },
    },
  },
  {
    inlineProps: new Set(['width', 'height', 'color']),
    accept: { color: 'color' } as const,
  },
);

const ButtonWrapper = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
});

interface ButtonProps extends ComponentProps<typeof ButtonWrapper> {
  isLoading?: boolean;
  title?: string;
  icon?: ReactNode;
  onPress: () => void;
}

const ButtonBase = ({
  icon,
  isLoading,
  disabled,
  title,
  children,
  onPress,
  ...props
}: ButtonProps) => {
  const isDisabled = isLoading || disabled;

  return (
    <TouchableOpacity disabled={isDisabled} onPress={onPress}>
      <ButtonWrapper disabled={isDisabled} {...props}>
        {icon && <ButtonWrapper.Icon>{icon}</ButtonWrapper.Icon>}
        {isLoading ? (
          <Spinner testID="loading" size="small" />
        ) : (
          <ButtonWrapper.Text disabled={isDisabled}>
            {title || children}
          </ButtonWrapper.Text>
        )}
      </ButtonWrapper>
    </TouchableOpacity>
  );
};

export const Button = memo(ButtonBase);
