import { fireEvent, render, waitFor } from '@/utils/tamagui-test';
import { useAuth } from '@/hooks';
import Login from '..';

jest.mock('@/hooks', () => ({
  useAuth: jest.fn(),
}));

export const mockLoginForm = { email: 'test@gmail.com', password: 'Test123' };

describe('Login Screen', () => {
  const mockLogin = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render to match snapshot', () => {
    (useAuth as jest.Mock).mockReturnValue({
      logIn: { mutate: mockLogin },
    });
    const component = render(<Login />);

    expect(component).toMatchSnapshot();
  });

  it('Should render the login form correctly', () => {
    (useAuth as jest.Mock).mockReturnValue({
      logIn: { mutate: mockLogin },
    });
    const { getByText, getAllByText } = render(<Login />);

    expect(getAllByText(/Log In/i)).toBeTruthy();
    expect(getByText(/Welcome/i)).toBeTruthy();
    expect(getByText(/Please enter your details to proceed./i)).toBeTruthy();
    expect(getByText(/Don’t have an account?/i)).toBeTruthy();
  });

  it('Should call login function when form is submitted', async () => {
    (useAuth as jest.Mock).mockReturnValue({
      logIn: { mutate: mockLogin },
    });
    const { getByLabelText, getAllByText } = render(<Login />);

    const emailInput = getByLabelText(/Email/i);
    const passwordInput = getByLabelText(/Password/i);
    const saveButton = getAllByText('Log In')[1];

    fireEvent.changeText(emailInput, mockLoginForm.email);
    fireEvent.changeText(passwordInput, mockLoginForm.password);
    fireEvent.press(saveButton);

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledTimes(1);
    });
  });
});
