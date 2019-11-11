import {Roles} from '../enums';
import {MyResponse} from './index';

export interface LoginRequest {
  login: string;
  password: string;
}

export interface GridData {
  id: number
  name: string;
  surname: string;
  login: string
}

export interface AuthResponse {
  user: GridData;
  role: Roles;
}

export type AuthResponseWrapper = MyResponse<AuthResponse>;
