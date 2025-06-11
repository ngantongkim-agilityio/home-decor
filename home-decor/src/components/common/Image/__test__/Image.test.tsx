import { render } from '@/utils/tamagui-test';
import { DEFAULT_IMAGE, BLUR_HASH } from '@/constants';
import { Image } from '..';

describe('Image Component', () => {
  const props = {
    testID: 'test-image',
  };

  it('Should render to match snapshot', () => {
    const component = render(<Image />);

    expect(component).toMatchSnapshot();
  });

  it('Should render with default props', () => {
    const { getByTestId } = render(<Image {...props} />);

    const image = getByTestId('test-image');

    expect(image.props.source).toEqual([DEFAULT_IMAGE]);
    expect(image.props.style).toEqual({
      width: 140,
      height: 160,
    });
    expect(image.props.placeholder).toEqual([{ BLUR_HASH }]);
  });
});
