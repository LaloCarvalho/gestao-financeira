import React from 'react';
import { ApiClient } from '../../services';

export interface IServicesContext {
    api: ApiClient;
    setToken: (token: string) => void;
}

export default React.createContext<IServicesContext>({} as IServicesContext);
