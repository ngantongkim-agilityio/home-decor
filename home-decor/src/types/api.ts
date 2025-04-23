import { IUser } from './user';

export interface IResponseApi<T> {
  status: boolean;
  data: T;
}

export interface IAuthData {
  user: IUser;
}

export interface IAuthKey {
  auth_key: string;
  refresh_key: string;
  uuid: string;
}

export interface IQueryParams {
  [key: string]: string;
}

export interface ILoginParams<T> {
  user: T;
}
