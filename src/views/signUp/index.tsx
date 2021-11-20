import { Visibility, VisibilityOff } from "@material-ui/icons";
import { createTheme } from '@mui/material/styles'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ThemeProvider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { SelectProps } from "../../types";
import { Container, DivForm, TextBox } from "./styles";
import MaleIcon from '@mui/icons-material/Male';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';


const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<SelectProps>();
  const [year, setYear] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [genderChecked, setGenderChecked] = useState<number>(0);

  const months = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  useEffect(() => {
    if (confirmEmail) console.log(confirmEmail);
  }, [confirmEmail]);

  useEffect(() => {
    if (month) console.log(month);
  }, [month]);

  useEffect(() => {
    if (genderChecked) console.log(genderChecked);
  }, [genderChecked]);

  useEffect(() => {
    if (name) console.log(name);
  }, [name]);

  useEffect(() => {
    if (email) console.log(email);
  }, [email]);

  const handleClickShowPassword = () => {
    showPassword === false ? setshowPassword(true) : setshowPassword(false);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleClickShowConfirmationPassword = () => {
    showConfirmPassword === false ? setShowConfirmPassword(true) : setShowConfirmPassword(false);
  };

  const handleMouseDownConfirmationPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff5722' //your color
      }
    }
  });
  
  return (
    <Container>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <DivForm className="col-md-12">
            <h1>Cadastre-se</h1>
            <FormControl sx={{ m: 1, width: 350 }}>
              <ThemeProvider theme={theme}>
                <TextBox
                  id="outlined-basic-name"
                  label="Nome"
                  variant="outlined"
                  onChange={(event: any) => setName(event.target.value)}
                />
              </ThemeProvider>
            </FormControl>
            <FormControlLabel
              value="1"
              control={<Checkbox
                onChange={() => setGenderChecked(1)}
                 sx={{
                  color: "black",
                  '&.Mui-checked': {
                    color: "green",
                },
              }}   />}
              label="Masculino"
              labelPlacement="end"
              checked={ genderChecked === 1 }
            />
            <FormControlLabel
              value="2"
              control={<Checkbox 
                onChange={() => setGenderChecked(2)}
                sx={{
                  color: "black",
                  '&.Mui-checked': {
                    color: "green",
                },
              }}   />}
              label="Feminino"
              labelPlacement="end"
              checked={ genderChecked === 2 }
            />
            <FormControl sx={{ m: 1, width: 120 }}>
              <TextBox
                id="outlined-basic-day"
                label="Dia"
                variant="outlined"
                onChange={(event: any) => setDay(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 150 }}>
              <InputLabel>Mês</InputLabel>
              <Select
                onChange={(event: any) => 
                  {
                    setMonth(event.target.value);
                  }
                }
                input={<OutlinedInput label="Mês" />}
                defaultValue={""}
              >
                {months.map((month) => (
                  <MenuItem key={month.value} value={month.value}>
                    {month.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 120 }}>
              <TextBox
                id="outlined-basic-year"
                label="Ano"
                variant="outlined"
                onChange={(event: any) => setYear(event.target.value)}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: 350 }}>
              <TextBox
                id="outlined-basic-email"
                label="Email"
                variant="outlined"
                onChange={(event: any) => setEmail(event.target.value)}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: 350 }}>
              <TextBox
                id="outlined-basic-confirm-email"
                label="Confirme o Email"
                variant="outlined"
                onChange={(event: any) => setConfirmEmail(event.target.value)}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: 350 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event: any) => setPassword(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (<VisibilityOff />) : (<Visibility />)}
                    </IconButton>
                  </InputAdornment>
                }
                label="Senha"
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: 350 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password-confirmation">
                Confirme a Senha
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-confirmation"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(event: any) => setConfirmPassword(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmationPassword}
                      onMouseDown={handleMouseDownConfirmationPassword}
                      edge="end"
                    >
                      {showConfirmPassword ? (<VisibilityOff />) : (<Visibility />)}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirme a Senha"
              />
            </FormControl>
          </DivForm>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
