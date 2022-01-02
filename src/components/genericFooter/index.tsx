import React from "react";
import logo from "./assets/logo.png";
import facebookLogo from "./assets/facebook.png";
import instagramLogo from "./assets/instagram.png";
import twitterLogo from "./assets/twitter.png";
import youtubeLogo from "./assets/youtube.png";
import * as S from "./styles";

const GenericFooter: React.FC = () => {

  return (
    <>
      <S.Footer style={S.navbar}>
        <S.DivLogo>
          <S.H5>
            <S.ImgFooter alt="" src={logo} />
            &nbsp;Entrada Direta
          </S.H5>
          <S.PDescription>
            Cuidar do seu dinheiro pode ser simples. <br />
            Você organiza e planeja sua vida financeira em um único lugar.
          </S.PDescription>
        </S.DivLogo>
        <div className="container text-center">
          <S.DivList className="row">
            <S.Ul className="col-lg-12 col-md-12">
              <S.Li>
                <S.A href="#!">Termos de Uso</S.A>
              </S.Li>
              <S.Li>
                <S.A href="#!">Entre em Contato</S.A>
              </S.Li>
              <S.Li>
                <S.A href="#!">Política de Privacidade</S.A>
              </S.Li>
              <S.Li>
                <S.A href="#!">Mapa do Site</S.A>
              </S.Li>
            </S.Ul>
          </S.DivList>
        </div>
        <S.DivCopyright>© 2021 Copyright: Eduardo Diógenes</S.DivCopyright>
        <S.DivSocialMedias>
          <S.Img alt="" src={facebookLogo} />
          <S.Img alt="" src={instagramLogo} />
          <S.Img alt="" src={twitterLogo} />
          <S.Img alt="" src={youtubeLogo} />
        </S.DivSocialMedias>
      </S.Footer>
    </>
  );
};

export default GenericFooter;
