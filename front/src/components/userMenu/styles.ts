import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const Container = styled.div`
`;

export const ImgLogo = styled.img`
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const NavbarInfo = styled.div`
  color: white;
  font-Size: 18;
  padding: 5px;
  border-radius: 100px;  
  display: inline-block;

  &:hover {
    background-color: #662275;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

export const Elipsis = styled.div`
  white-space: nowrap; 
  max-width: 160px; 
  overflow: hidden;
  text-overflow: ellipsis; 
  display: inline-block;
  vertical-align: middle;
  text-align: left;
`;

export const DivLeftNavbar = styled.div`
  padding-left: 30px;
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
  font-family: "Open Sans";
  font-size: 18px;
`;

export const DivIconMenu = styled.div`
  display: inline-block;
  margin-left: 20px;
`;

export const DivOptionsMenu = styled.div`
  font-family: "Open Sans";
  color: black;
`;

interface Props {
  button: any;
  component: any;
  key: string;
  href: string;
}

export const ListItemDrawer = styled(ListItem)<Props>`
  text-decoration: none;
  color: black;
  padding-left: 25px;
  font-family: "Open Sans";  
  :hover {
    background-color: #662275;
  }  
`;

export const Teste2 = styled(ListItem)`
  background-color: #662275;
  text-decoration: none;
  color: black;
  padding-left: 25px;
  font-family: "Open Sans";  
`;

export const Button = styled.button` 
  font-family: 'Open Sans', sans-serif;
  color: white;
  background: linear-gradient(-30deg,#3b02ed,#8e2ae0 55%);
  margin: 20px 10px 10px 10px;
  padding: 15px 15px;
  width: 150px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const DivNew = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateContainer = styled.div`
  border: 1px solid #ccc;
  width: 350px;
  display: inline-block;
  border-radius: 3px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 10px;
  text-align: left;
`;

export const navbar = { backgroundColor: "#200733", align: "right" };

export const menuItens = { fontFamily: "Open Sans", textDecoration: "none", color: "black" };

export const menuItensIcons = { color: "#8C8C8C" };

export const Drawerlist = { color: "black", paddingLeft: 25, fontFamily: "Open Sans", textDecoration: "none" };

export const DrawerlistIcon = { color: "#8C8C8C" };