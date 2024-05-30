import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpService {

    baseUrl: string
    instance: AxiosInstance
    constructor(partialUrl = '/api/v1/') {
        this.baseUrl =  import.meta.env.VITE_API_HOST + partialUrl;
        this.instance = axios.create({ baseURL: this.baseUrl });

    }



    get(url: string, customHeaders = {}) {
        // return this.request('get', url, null, customHeaders);
    }
    
    post<T>(url: string, data: any, customHeaders = {}): Promise<AxiosResponse<T>> {
        return this.instance.post(url, data, { headers: customHeaders });
    }
    
   
}

