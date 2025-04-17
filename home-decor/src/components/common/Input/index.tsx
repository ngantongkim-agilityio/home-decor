// Libs
import { forwardRef, memo, Ref } from 'react';
import { TextInput } from 'react-native';
import {
  Input as InputDefault,
  InputProps,
  Stack,
  Label,
  Text,
  styled,
} from 'tamagui';

interface IInputProps extends InputProps {
  id: string;
  label?: string;
  placeholder?: string;
  variant?: 'primary';
  disabled?: boolean;
  errorMessage?: string;
}

const InputStyled = styled(InputDefault, {
  variants: {
    variant: {
      primary: {
        fontSize: 14,
        height: 35,
        paddingBottom: 10,
        br: 0,
        borderTopWidth: 0,
        borderWidth: 0,
        borderBottomWidth: 2,
        borderBottomColor: '$border',
        backgroundColor: 'transparent',
      },
    },
  } as const,
});

const LabelStyled = styled(Label, {
  variants: {
    variant: {
      primary: {
        fontSize: 14,
        lineHeight: 20,
        color: '$textLight',
      },
    },
  } as const,
});

const InputBase = forwardRef(
  (
    {
      id,
      label = '',
      placeholder = '',
      variant = 'primary',
      disabled = false,
      errorMessage,
      ...rest
    }: IInputProps,
    ref?: Ref<TextInput>,
  ) => (
    <Stack width="100%" gap={5}>
      {label && (
        <LabelStyled variant={variant} htmlFor={id}>
          {label}
        </LabelStyled>
      )}
      <InputStyled
        id={id}
        variant={variant}
        aria-label={label}
        placeholder={placeholder}
        placeholderTextColor="$placeholder"
        disabled={disabled}
        ref={ref}
        {...rest}
      />
      {errorMessage && <Text color="red">{errorMessage}</Text>}
    </Stack>
  ),
);

export const Input = memo(InputBase);
