import React, { useState } from 'react';
import { ApiClient } from '../../services';
import ServicesContext from './context';

const BASE_URL = "https://localhost:7297/api/";

const Provider: React.FC = ({
  children,
}) => {
  const token = localStorage.getItem("loggedUser");
  const [apiClient, setApiClient] = useState<ApiClient>(new ApiClient(BASE_URL, token ? JSON.parse(token).accessToken : undefined));

  const setToken = (token: string) => {
    setApiClient(new ApiClient(BASE_URL, token));
  }

  return (
    <ServicesContext.Provider value={{
      api: apiClient,
      setToken: setToken
    }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default Provider;
