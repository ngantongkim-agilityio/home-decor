import { render, fireEvent } from '@/utils/tamagui-test';
import { Input } from '..';

describe('Input Component', () => {
  const props = {
    id: 'test-input',
  };

  it('Should render to match snapshot', () => {
    const component = render(<Input {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('Should render error message', () => {
    const { getByText } = render(
      <Input errorMessage="Invalid input" {...props} />,
    );

    expect(getByText('Invalid input')).toBeTruthy();
  });

  it('Should call onChangeText when input changes', () => {
    const mockOnChangeText = jest.fn();

    const { getByPlaceholderText } = render(
      <Input
        value=""
        placeholder="Enter text"
        onChangeText={mockOnChangeText}
        {...props}
      />,
    );

    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'Changed text');

    expect(mockOnChangeText).toHaveBeenCalledWith('Changed text');
  });
});
