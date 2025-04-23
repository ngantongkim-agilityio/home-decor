// Libs
import { useMutation } from '@tanstack/react-query';

// Constants
import { ROUTES } from '@/constants';

// Services
import { POST } from '@/services';

// Types
import {
  IQueryParams,
  ILoginParams,
  IResponseApi,
  IUser,
  IResponseVerify,
  IVerify,
  IUserFormInput,
} from '@/types';

export const useAuth = () => {
  const logIn = useMutation({
    mutationFn: (formData: ILoginParams<IUserFormInput>) =>
      POST<IResponseApi<ILoginParams<IUser>>>(ROUTES.LOGIN, formData),
  });

  const logOut = useMutation({
    mutationFn: ({ uuid, auth_key }: IQueryParams) =>
      POST(
        ROUTES.LOGOUT,
        { uuid },
        {
          headers: {
            'x-auth-key': auth_key,
          },
        },
      ),
  });

  const signUp = useMutation({
    mutationFn: (formData: ILoginParams<IUserFormInput>) =>
      POST<IResponseApi<IResponseVerify>>(ROUTES.SIGNUP, formData),
  });

  const verifyCode = useMutation({
    mutationFn: (formData: IVerify) =>
      POST<IResponseApi<ILoginParams<IUser>>>(ROUTES.VERIFY_CODE, formData),
  });

  return { logIn, signUp, verifyCode, logOut };
};
