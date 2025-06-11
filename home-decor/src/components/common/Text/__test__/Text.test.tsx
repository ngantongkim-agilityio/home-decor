import { render } from '@/utils/tamagui-test';
import { Text } from '..';

describe('Text Component', () => {
  it('Should render to match snapshot', () => {
    const component = render(<Text />);

    expect(component).toMatchSnapshot();
  });
});
