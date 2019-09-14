import {ResponseStatus} from '../enums';

export interface MyResponse<T = any> {
  data: T;
  status: ResponseStatus;
  message: string;
}
