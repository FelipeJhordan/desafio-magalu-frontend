import axios, { AxiosInstance, AxiosResponse } from 'axios';

export class HttpService {
  baseUrl: string;
  instance: AxiosInstance;
  constructor(partialUrl = '/api/v1/') {
    this.baseUrl = import.meta.env.VITE_API_HOST + partialUrl;
    this.instance = axios.create({ baseURL: this.baseUrl });
  }

  get<T>(url: string, customHeaders = {}): Promise<AxiosResponse<T>> {
    return this.instance.get(url, customHeaders);
  }

  post<T>(
    url: string,
    data: any,
    customHeaders = {}
  ): Promise<AxiosResponse<T>> {
    return this.instance.post(url, data, { headers: customHeaders });
  }
}
