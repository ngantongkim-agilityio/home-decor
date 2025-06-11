import { fireEvent, render } from '@/utils/tamagui-test';

import { Button } from '..';

describe('Button Component', () => {
  it('Should calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button onPress={mockOnPress} disabled>
        Test Button
      </Button>,
    );
    const button = getByText('Test Button');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalled();
  });

  // it('should not call onPress function while disabled', () => {
  //   const mockOnPress = jest.fn();
  //   const { getByTestId } = render(
  //     <Button onPress={mockOnPress} disabled isLoading>
  //       Test Button
  //     </Button>,
  //   );

  //   const button = getByTestId('button');
  //   console.log(button);
  //   fireEvent.press(button);

  //   expect(mockOnPress).toHaveBeenCalledTimes(0);
  // });

  // it('should not call function onPress while loading', () => {
  //   const mockOnPress = jest.fn();
  //   const { getByTestId } = render(
  //     <Button onPress={handlePress} isLoading>
  //       Test Button
  //     </Button>,
  //   );

  //   const button = getByTestId('button');
  //   fireEvent.press(button);

  //   expect(mockOnPress).toHaveBeenCalledTimes(0);
  // });
});
