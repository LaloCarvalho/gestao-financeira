import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class BaseClient {
  public client: AxiosInstance;

  constructor(baseURL: string, token?: string) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });
  }

  public async get<T>(controller: string, route: string = '', headers?: any) {

    return await this.client
      .get<T>(
        `/${controller}${route ? '/' + route : ''}`,
        {
          headers: headers,
        }
      )
      .then(((resultado: any) => resultado));
  }

  public async post(controller: string, route: string = '', body: Object = {}) {

    return await this.client
      .post(
        `/${controller}${route ? '/' + route : ''}`,
        body,
      )
      .then(((resultado: any) => resultado));
  }

  public async put(controller: string, route: string = '', body: Object = {}) {

    return await this.client
      .put(
        `/${controller}${route ? '/' + route : ''}`,
        body,
      )
      .then(((resultado: any) => resultado));
  }

  public async delete(controller: string, route: string = '', id: number) {

    return await this.client
      .delete(
        `/${controller}${route ? '/' + route : ''}`,
      )
      .then(((resultado: any) => resultado));
  }
}

export class GenericRoutes<bodyModel, responseType> {
  controller = '';

  constructor(controller: string) {
    this.controller = controller;
  }

  get = async (client: BaseClient): Promise<AxiosResponse<responseType[]>> =>
    await client.get(`${this.controller}`, undefined);

  getById = async (id: number, client: BaseClient): Promise<AxiosResponse<responseType>> =>
    await client.get(`${this.controller}/${id}`);

  post = async (body: bodyModel, client: BaseClient) =>
    await client.post(`${this.controller}`, undefined, body);

  put = async (body: bodyModel, client: BaseClient) =>
    await client.put(`${this.controller}`, undefined, body);

  delete = async (id: number, client: BaseClient, userId?: number) =>
    await client.delete(`${this.controller}/${id}${userId ? '/' + userId : ''}`, undefined, id);
}

export class GenericRoutesWithCustomPut<bodyModel, responseType, putType> {
  controller = '';
  putRoute = '';

  constructor(controller: string, putRoute: string) {
    this.controller = controller;
    this.putRoute = putRoute;
  }

  get = async (client: BaseClient): Promise<AxiosResponse<responseType[]>> =>
    await client.get(`${this.controller}`, undefined);

  getById = async (id: number, client: BaseClient): Promise<AxiosResponse<responseType>> =>
    await client.get(`${this.controller}/${id}`);

  post = async (body: bodyModel, client: BaseClient) =>
    await client.post(`${this.controller}`, undefined, body);

  put = async (body: putType, client: BaseClient) =>
    await client.put(`${this.controller}`, this.putRoute, body);

  delete = async (id: number, client: BaseClient, userId?: number) =>
    await client.delete(`${this.controller}/${id}${userId ? '/' + userId : ''}`, undefined, id);
}