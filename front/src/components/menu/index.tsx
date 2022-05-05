import React, { useState } from "react";
import * as S from "./styles";
import GenericMenu from "../../components/genericMenu";
import GenericFooter from "../../components/genericFooter";
import UserMenu from "../../components/userMenu";
import UserFooter from "../../components/userFooter";

const Menu: React.FC = ({ children }) => {
  const [hasUser, setHasUser] = useState<boolean>(false);

  return (
    <>
      {hasUser ?
        <UserMenu>
          <S.DivChildren>{children}</S.DivChildren>
        </UserMenu> :
        <GenericMenu></GenericMenu>

      }
      {!hasUser ?
        <S.DivChildren>{children}</S.DivChildren> :
        ""
      }

      {hasUser ?
        <UserFooter></UserFooter> :
        <GenericFooter></GenericFooter>
      }
    </>
  );
};

export default Menu;
