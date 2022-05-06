import styled from 'styled-components';
import { TextField } from "@mui/material";
import back from "./assets/bg.gif";

export const GrayBackground = styled.div`
  background-color: #f5f6fc;
  padding-top: 70px; 
  padding-bottom: 0; 
`;

export const Container = styled.div`    
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding-bottom: 80px;
  padding-top: 80px;
  background-image: url(${back});
  background-repeat: no-repeat;
	background-size: cover;
`;

export const SubContainer = styled.div`
  max-width: 1400px;
  margin: 0;
  padding: 0;
`;

export const H1 = styled.h1`  
@media only screen and (max-width: 768px) {
  padding-top: 0;
  padding-bottom: 30px;
  }
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Open Sans', sans-serif;
`;

export const H3 = styled.h3` 
@media only screen and (max-width: 768px) {
  padding-top: 30px;
  padding-bottom: 0;
  }
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  padding-top: 20px;
  padding-bottom: 50px;
`;

export const TextBox = styled(TextField)`
  margin: auto;
`;

export const GenderContainer = styled.div`
  border: 1px solid #ccc;
  width: 350px;
  display: inline-table;
  justify-content: left;
  border-radius: 3px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 8px;
  padding: 10px 10px 30px 10px;
  text-align: left;
`;

export const DivOptions = styled.div`
  text-align: center;
  padding-top: 10px;
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

export const LeftDiv = styled.div` 
@media only screen and (max-width: 576px) {
  padding-top: 0;
  text-align: center;
  margin-top: 0;
  }
@media only screen and (max-width: 768px) {
  padding-bottom: 0;
  text-align: center;
  margin-top: 20px;
  display: inline-flex;
  }
  text-align: right;
  margin-top: 30px;
`;

export const RightDiv = styled.div` 
@media only screen and (max-width: 576px) {
  padding-top: 0;
  text-align: center;
  margin-top: 0;
  }
@media only screen and (max-width: 768px) {
  padding-top: 0;
  text-align: center;
  margin-top: 0;
  display: inline-flex;
  }
  text-align: left;
  margin-top: 30px;
`;

export const DivButtom = styled.div`
@media only screen and (max-width: 768px) {
  padding-top: 10px;
  }
  margin-top: 15px;
`;

export const DivButtomGoogle = styled.div`
  margin-bottom: 30px;
`;

export const Hr = styled.div`
  font-family: 'Open Sans', sans-serif;
  margin-left: 21%;
  margin-right: 21%;
  width: 58%;
`;

export const Button = styled.button` 
  font-family: 'Open Sans', sans-serif;
  color: white;
  background: linear-gradient(-30deg,#3b02ed,#8e2ae0 55%);
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 350px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

export const ImgFacebook = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  margin-left: 15px;
`;

export const A = styled.a`
  color: rgba(152, 93, 197, 1);
  text-decoration: none;  
  font-size: 15px;
  text-align: left !important;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 15px;

  &:hover {
    color: #662275;
    cursor: pointer;
  }
`;