/*
 * Project: Akimasoft-Mobile
 * Author: Akimabs
 * -----
 * Modified By: the developer formerly known as akimabs at <ahakimabs@gmail.com>
 * -----
 * Copyright (c) 2021 Akimasoft
 */
import axios, { AxiosResponse } from 'axios';
import { BaseRequest, ResultType, Status } from 'types';
import { BASE_URL } from 'env';

/**
 * Request helper for HTTPRequest
 * @param params must receive Object
 * @param id must receive String or Number
 * @param headers must receive Object
 * @param body must receive Object
 * @param method from AxiosMethod type
 * @param endpoint must receive Endpoint type
 * and must return
 * @returns { ResultType }
 */

export const request = async ({
  params,
  id,
  headers,
  body,
  endpoint,
  method,
}: BaseRequest): Promise<ResultType> => {
  let result: ResultType = {
    status: Status.loading,
    status_code: 0,
    data: null,
  };

  try {
    const res: AxiosResponse = await axios({
      url: `${BASE_URL}${endpoint}/` + id,
      method,
      data: body,
      headers,
      params,
    });

    const resultSuccess: ResultType = {
      status: Status.success,
      status_code: res.status,
      data: res.data?.data,
    };

    return { ...result, resultSuccess };
    //End of schema success
  } catch ({ response }: any) {
    const resultError: ResultType = {
      status: Status.error,
      status_code: response.status,
      data: response.data?.data,
    };

    return { ...result, resultError };
    //End of schema error
  }
};
