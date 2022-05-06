import { AxiosResponse } from 'axios';
import { User } from '../../types';
import BaseClient, { GenericRoutes, GenericRoutesWithCustomPut } from '../baseClient';

export default class apiClient extends BaseClient {

  public user = {
    ...new GenericRoutes<User, User>('user'),

    postNewUser: async (body: User, client: BaseClient): Promise<AxiosResponse> => {
      return client.post(`User/register`, '', body)
    },
  }
}