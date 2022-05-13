import React, { useEffect, useState } from 'react';
import { User } from '../../types';
import SecurityContext from './context';

const Provider: React.FC = ({
  children,
}) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    let loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("loggedUser");
    }
  }, [user]);

  return (
    <SecurityContext.Provider value={{
      User: user,
      SetUser: setUser,
    }}>
      {children}
    </SecurityContext.Provider>
  );
};

export default Provider;
