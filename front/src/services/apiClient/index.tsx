import { AxiosResponse } from 'axios';
import { User } from '../../types';
import BaseClient, { GenericRoutes, GenericRoutesWithCustomPut } from '../baseClient';

export default class apiClient extends BaseClient {

  public user = {
    postNewUser: async (body: User, client: BaseClient): Promise<AxiosResponse> => {
      return client.post(`User/register`, '', body)
    },

    postLogin: async (body: User, client: BaseClient): Promise<AxiosResponse<User>> => {
      return client.post(`User/login`, '', body)
    },

    getTeste: async (client: BaseClient): Promise<AxiosResponse<User>> =>
      client.get(`User`),
  }
}