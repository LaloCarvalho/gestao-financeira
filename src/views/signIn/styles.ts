import styled from 'styled-components';

export const Container = styled.div` 
  margin-top: 120px; 
  margin-bottom: 80px;  
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding-bottom: 80px;
`;

export const LeftDiv = styled.div` 
@media only screen and (max-width: 768px) {
  border-right: 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 30px;
  }
  border-right: 1px solid #ccc;
`;

export const RightDiv = styled.div` 
@media only screen and (max-width: 768px) {
  padding-top: 30px;
  }
`;

export const H1 = styled.h1` 
  font-family: 'Open Sans', sans-serif;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const H3 = styled.h3` 
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  padding-top: 50px;
`;

export const Button = styled.button` 
  font-family: 'Open Sans', sans-serif;
  color: black;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  width: 350px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 5px;
  text-align: center;

  &:hover {
    background-color: #efefef;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;

export const A = styled.a`
  color: rgba(152, 93, 197, 1);
  text-decoration: none;  
  font-size: 15px;
  text-align: left !important;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;

  &:hover {
    color: #662275;
    cursor: pointer;
  }
`;