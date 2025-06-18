import { useMutation } from '@tanstack/react-query';
import { renderHook, act } from '@/utils/tamagui-test';
import { useAuth } from '../useAuth';

jest.mock('@tanstack/react-query', () => {
  return {
    useMutation: jest.fn(),
  };
});

jest.mock('@/services', () => ({
  POST: jest.fn(),
}));

describe('useAuth hook', () => {
  const mockAuth = { user: { email: 'test@gmail.com', password: 'Test123' } };

  it('Should call login incorrectly', async () => {
    const mockMutate = jest.fn();

    (useMutation as jest.Mock).mockReturnValue({
      mutateAsync: mockMutate,
    });

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.logIn.mutateAsync(mockAuth);
    });

    expect(mockMutate).toHaveBeenCalled();
  });
});
