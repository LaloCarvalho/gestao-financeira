import styled from 'styled-components';

export const Container = styled.div`
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const ImgLogo = styled.img`
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const navbarInfo = styled.div`
  color: white;
  font-Size: 18;
  padding: 5px;
  border-radius: 100px;  

  &:hover {
    background-color: #662275;
    cursor: pointer;
  }
`;

export const DivLeftNavbar = styled.div`
  margin-left: 20px;
  padding-top: 10px;
  display: inline-block;
`;

export const DivRightNavbar = styled.div`
  margin-right: 20px;
  display: inline-block;
  float: right;
`;

export const DivLogo = styled.div`
  margin-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: inline-block;
  font-family: "Open Sans"
  font-size: 18px;
`;

export const DivIconMenu = styled.div`
  display: inline-block;
  margin-left: 30px;
`;

export const DivOptionsMenu = styled.div`
  font-family: "Open Sans";
  color: black;
`;

export const navbar = { backgroundColor: "#200733", align: "right" };

export const menuItens = { fontFamily: "Open Sans" };

export const menuItensIcons = { color: "#ccc" };

export const Drawerlist = { color: "black"};