import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 120px; 
  margin-bottom: 80px;  
  padding-bottom: 80px;
`;

export const LeftDiv = styled.div` 
@media only screen and (max-width: 768px) {
  padding-top: 30px;
  }
`;

export const RightDiv = styled.div` 
@media only screen and (max-width: 768px) {
  padding-bottom: 30px;
  }
`;

export const H1 = styled.h1` 
  font-family: 'Open Sans', sans-serif;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Img = styled.img` 
  @media only screen and (max-width: 768px) {
    padding-top: 0;
  }
  padding-top: 50px;
  width: 100%;
`;

export const SendButton = styled.button` 
`;