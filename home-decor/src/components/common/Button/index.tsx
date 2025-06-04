import {
  ComponentProps,
  ReactNode,
  forwardRef,
  memo,
  useCallback,
} from 'react';
import { Spinner, XStack } from 'tamagui';
import {
  styled,
  createStyledContext,
  withStaticProperties,
  GestureReponderEvent,
} from '@tamagui/core';
import { Text } from '../Text';

const ButtonContext = createStyledContext({
  variant: 'primary',
  disabled: null,
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

  variants: {
    variant: {
      primary: {
        borderRadius: 50,
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: 'transparent',
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
        fontWeight: 'normal',
        color: '$textSecondary',
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
    inlineProps: new Set(['width', 'height', 'color', 'disabled']),
    accept: { color: 'color' } as const,
  },
);

const ButtonWrapper = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
});

interface ButtonProps extends ComponentProps<typeof ButtonWrapper> {
  title?: string;
  isLoading?: boolean;
  icon?: ReactNode;
}

const ButtonBase = forwardRef(
  (
    {
      icon,
      isLoading,
      disabled,
      title,
      children,
      onPress,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const isDisabled = isLoading || disabled;

    const handlePress = useCallback(
      (event: GestureReponderEvent) => {
        event.persist();
        requestAnimationFrame(() => onPress?.(event));
      },
      [onPress],
    );

    return (
      <ButtonWrapper disabled={isDisabled} onPress={handlePress} {...props}>
        {icon && <ButtonWrapper.Icon>{icon}</ButtonWrapper.Icon>}
        {isLoading ? (
          <Spinner size="small" />
        ) : (
          <ButtonWrapper.Text disabled={isDisabled}>
            {title || children}
          </ButtonWrapper.Text>
        )}
      </ButtonWrapper>
    );
  },
);

export const Button = memo(ButtonBase);
