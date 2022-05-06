import React, { useContext, useEffect } from "react";
import { SecurityContext } from "../../hooks";
import * as S from "./styles";

const UserReport: React.FC = () => {
  const { User, SetUser } = useContext(SecurityContext);

  useEffect(() => {
    //console.log(User);
  }, []);
  
  return (
    <S.Container className="container">
      <div className="row text-center">
        <S.DivLeftBlock className="col-lg-6 col-md-12">
          <S.H1>Início</S.H1>
        </S.DivLeftBlock>

        <S.DivRightBlock className="row col-lg-6 col-md-12">
          <S.H1>TESTE</S.H1>
        </S.DivRightBlock>
      </div>
    </S.Container>
  );
};

export default UserReport;
