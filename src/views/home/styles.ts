import styled from 'styled-components';

export const Container = styled.div`  
`;

export const ImgCarousel = styled.img`
  margin-top: 50px;
  width: 100%;
  text-align: center;
  max-height: 550px;
`;

export const Img = styled.img` 
 @media only screen and (max-width: 576px) {    
    margin: 0 auto;
  } 
  max-width: 100%;
  display: inline-block;
  
`;

export const DivSecondBlock = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const DivImg = styled.div`
  text-align: right;
`;

export const DivImgFourthBlock = styled.div`
  text-align: left;
`;

export const DivText = styled.div`
  padding-top: 100px;
`;

export const H2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export const P = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
`;

export const ThirdSection = styled.div`
  background-color: #efefef;
`;

export const DivThirdBlock = styled.div`
`;

export const DivTextThirdBlock = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const DivFourthBlock = styled.div`
  padding-top: 80px; 
`;

export const DivTextFourthBlock = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
`;

export const H1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;  
  padding-bottom: 20px;
`;

export const Li = styled.li`
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
`;

export const ImgLi = styled.img`
  width: 40px;
  height: 40px;  
`;

export const ImgSecurity = styled.img`
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  height: 400px;  
  padding-top: 45px;
`;

export const Item = styled.div`
  @media only screen and (max-width: 576px) {
  text-align: center;
  }
`;



export const row = { paddingTop: 100, backgroundColor: 'rgba(95, 97, 98, 0.1)'};