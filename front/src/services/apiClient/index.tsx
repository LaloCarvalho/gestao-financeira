import { AxiosResponse } from 'axios';
import { User } from '../../types';
import BaseClient, { GenericRoutes, GenericRoutesWithCustomPut } from '../baseClient';

export default class apiEntradaDiretaClient extends BaseClient {

  public usuario = {
    ...new GenericRoutes<User, User>('user'),
  }
}