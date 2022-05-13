import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import GenericMenu from "../../components/genericMenu";
import GenericFooter from "../../components/genericFooter";
import UserMenu from "../../components/userMenu";
import UserFooter from "../../components/userFooter";
import { SecurityContext } from "../../hooks";

const Menu: React.FC = ({ children }) => {
  const { User } = useContext(SecurityContext);

  return (
    <>
      {User ?
        <UserMenu>
          <S.DivChildren>{children}</S.DivChildren>
        </UserMenu> :
        <GenericMenu></GenericMenu>

      }
      {!User ?
        <S.DivChildren>{children}</S.DivChildren> :
        ""
      }

      {User ?
        <UserFooter></UserFooter> :
        <GenericFooter></GenericFooter>
      }
    </>
  );
};

export default Menu;
