import styled from 'styled-components';
import { Button, TextField } from "@mui/material";

export const Container = styled.div`

`;

export const DivForm = styled.div`
`;

export const H1 = styled.h1`
  margin-top: 60px;
  margin-bottom: 30px;
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

export const SignUpButton = styled(Button)`
  padding: 10px;
  margin-top: 60px;
`;