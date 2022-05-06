import { createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  ThemeProvider,
} from "@mui/material";

interface passordBoxProps {
  id: string;
  onChange: (event: any) => void;
  label: string;
  link?: any;
  value?: string;
}

const PasswordBox: React.FC<passordBoxProps> = ({ onChange, id, label, link, value }: passordBoxProps) => {
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    showPassword === false ? setshowPassword(true) : setshowPassword(false);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#662275",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ m: 1, width: 350 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id={id}
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          value={value}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
        {link}        
      </FormControl>
    </ThemeProvider>
  );
};

export default PasswordBox;
