import styled from 'styled-components';
import { TextField } from "@mui/material";

export const Container = styled.div` 
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px; 
  margin-bottom: 80px; 
  padding-top: 30px;
  padding-bottom: 40px;
  width: 580px;  
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const H1 = styled.h1`  
  margin-bottom: 30px;
  font-family: 'Open Sans', sans-serif;
`;

export const TextBox = styled(TextField)`
  margin: auto;
`;

export const GenderContainer = styled.div`
  border: 1px solid #ccc;
  width: 440px;
  display: inline-table;
  justify-content: left;
  border-radius: 3px;
  margin-top: 6px;
  padding: 10px;
  text-align: left;
`;

export const DateContainer = styled.div`
  border: 1px solid #ccc;
  width: 440px;
  display: inline-table;
  justify-content: left;
  border-radius: 3px;
  margin-top: 15px;
  margin-bottom: 8px;
  padding: 14px;
  text-align: left;
`;

export const DivOptions = styled.div`
  text-align: center;
`;