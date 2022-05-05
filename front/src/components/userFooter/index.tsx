import React from "react";
import logo from "./assets/logo.png";
import facebookLogo from "./assets/facebook.png";
import instagramLogo from "./assets/instagram.png";
import twitterLogo from "./assets/twitter.png";
import youtubeLogo from "./assets/youtube.png";
import * as S from "./styles";

const UserFooter: React.FC = () => {

  return (
    <>
      <S.Footer style={S.navbar}>
        <S.DivCopyright>
            © 2021 Copyright: Eduardo Diógenes
        </S.DivCopyright>
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

export default UserFooter;
