import { FormControl, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";
import * as S from "./styles";

interface textBoxProps {
  id: string;
  onChange: (event: any) => void;
  label: string;
  width?: number;
  inputProps?: number;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#662275",
    },
  },
});

const textBox: React.FC<textBoxProps> = ({ onChange, id, label, width, inputProps }: textBoxProps) => {
  return (
    <FormControl sx={{ m: 1, width: width }}>
      <ThemeProvider theme={theme}>
        <S.TextBox
          id={id}
          label={label}
          variant="outlined"
          onChange={onChange}
          inputProps={{ maxLength: {inputProps} }}
        />
      </ThemeProvider>
    </FormControl>
  );
};

export default textBox;
