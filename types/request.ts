import { Method } from 'axios';

export enum Endpoint {
  login = 'login',
}

export type BaseRequest = {
  /**
   * URL data for call the request api
   * must be string and call it for Endpoint types in the 'app/types'
   */
  endpoint: Endpoint;
  /**
   * Method for action the request api
   * must be string and one of item
   */
  method: Method;
  /**
   * data for the request post, put, patch
   * must be object and look the Backend requirement
   */
  body?: Object;
  /**
   * params like a body, just but it this for requirements
   * must be object and look the Backend requirement
   */
  params?: Object;
  /**
   * headers must be fill with object, axios will detect it
   * must be object and look the Backend requirement
   */
  headers?: Object;
  /**
   * id like params, but without the key
   * must be object and look the Backend requirement
   */
  id?: string;
};

export type ResultType = {
  status: 'loading' | 'success' | 'error';
  status_code: string | number;
  data: any;
  [key: string]: any;
};
