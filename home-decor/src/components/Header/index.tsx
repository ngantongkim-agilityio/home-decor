// Libs
import { memo, FunctionComponent } from 'react';
import { Stack, Text, Button } from 'tamagui';

// Components
import { BackIcon } from '@/components';

type ButtonIconProps = { color?: string; size?: number };

interface IHeaderProps {
  title?: string;
  isHome?: boolean;
  leftIcon?: JSX.Element | FunctionComponent<ButtonIconProps> | null;
  rightIcon?: JSX.Element | FunctionComponent<ButtonIconProps> | null;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const Header = ({
  title = '',
  isHome = false,
  leftIcon = BackIcon,
  rightIcon,
  onPressLeft = () => {},
  onPressRight = () => {},
}: IHeaderProps) => {
  return (
    <Stack width="100%" testID="test-header" paddingStart={20} paddingEnd={20}>
      <Stack flexDirection="row" justify="space-between" items="center">
        {leftIcon && (
          <Button
            background={'transparent'}
            icon={leftIcon}
            onPress={onPressLeft}
          />
        )}
        {isHome ? (
          <Stack>
            <Text
              fontWeight={'400'}
              color="$textLight"
              fontSize={18}
              lineHeight={25}
            >
              Make home
            </Text>
            <Text
              fontWeight={'700'}
              textTransform="uppercase"
              color="$secondary"
              fontSize={18}
              lineHeight={25}
            >
              Beautiful
            </Text>
          </Stack>
        ) : (
          <Text fontWeight={'700'} color="$dark" fontSize={16} items="center">
            {title}
          </Text>
        )}
        {rightIcon ? (
          <Button
            background={'transparent'}
            icon={rightIcon}
            onPress={onPressRight}
          />
        ) : (
          <Stack width={30} />
        )}
      </Stack>
    </Stack>
  );
};

export default memo(Header);
