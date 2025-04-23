import { IAuthKey } from './api';

export interface IUserFormInput {
  uuid?: string;
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  type?: string;
}

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_pic: string;
  email_verified: boolean;
  key?: IAuthKey;
}

export interface IResponseVerify {
  verify_id: number | null;
}
export interface IVerify extends IResponseVerify {
  code: number;
}
