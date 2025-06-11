import { fireEvent, render } from '@/utils/tamagui-test';
import { Button } from '..';

describe('Button Component', () => {
  it('Should render to match snapshot', () => {
    const component = render(<Button onPress={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });

  it('Should calls onPress function when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(<Button onPress={mockOnPress}>Button</Button>);
    const button = getByText('Button');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalled();
  });

  it('Should not call onPress function while disabled', async () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title="Button" disabled onPress={mockOnPress} />,
    );

    const button = getByText('Button');
    fireEvent.press(button);

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('Should not call onPress function while loading', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<Button isLoading onPress={mockOnPress} />);

    const button = getByTestId('loading');
    fireEvent.press(button);

    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
