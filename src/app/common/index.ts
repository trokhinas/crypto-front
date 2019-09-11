export interface Response<T = any> {
  data: T;
  status: string;
  message: string;
}
