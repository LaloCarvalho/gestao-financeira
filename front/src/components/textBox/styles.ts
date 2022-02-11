import { TextField } from "@mui/material";
import styled from "styled-components";

export const TextBox = styled(TextField)`
@media only screen and (max-width: 576px) {
  max-width: 100%;
  }
@media only screen and (max-width: 768px) {
  max-width: 100%;
  }
  max-width: 440px;
`;