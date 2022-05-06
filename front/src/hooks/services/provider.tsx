import React from 'react';
import { ApiClient } from '../../services';
import ServicesContext from './context';

const Provider: React.FC = ({
  children,
}) => {
  const apiClient = new ApiClient("https://localhost:7297/api/");

  return (
    <ServicesContext.Provider value={{
      api: apiClient,
    }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default Provider;
