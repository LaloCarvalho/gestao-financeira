import React, { Dispatch } from 'react';
import { User } from '../../types';

export interface ISecurityContext {
    User: User | undefined;
    SetUser: Dispatch<React.SetStateAction<User | undefined>>;
  }

export default React.createContext<ISecurityContext>({} as ISecurityContext);
