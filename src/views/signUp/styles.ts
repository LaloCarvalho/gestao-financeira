import styled from 'styled-components';
import { TextField } from "@mui/material";

export const Container = styled.div` 
  margin-top: 120px; 
  margin-bottom: 80px;  
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding-bottom: 80px;
`;

export const H1 = styled.h1`  
  padding-top: 50px;
  padding-bottom: 50px;
  font-family: 'Open Sans', sans-serif;
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
  margin-top: 6px;
  padding: 10px;
  text-align: left;
`;

export const DateContainer = styled.div`
  border: 1px solid #ccc;
  width: 350px;
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