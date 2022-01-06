import React from "react";
import * as S from "./styles";

const Settings: React.FC = () => {
  return (
    <S.Container className="container">
      <div className="row text-center">
        <S.DivLeftBlock className="col-lg-6 col-md-12">
          <S.H1>Configurações</S.H1>
        </S.DivLeftBlock>

        <S.DivRightBlock className="row col-lg-6 col-md-12">
          <S.H1>TESTE</S.H1>
        </S.DivRightBlock>
      </div>
    </S.Container>
  );
};

export default Settings;
