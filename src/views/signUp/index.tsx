import { Visibility, VisibilityOff } from "@material-ui/icons";
import { createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { SelectProps } from "../../types";
import { SignUpButton } from "./materialStyles";
import { Col, Row } from "react-bootstrap";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ThemeProvider,
} from "@mui/material";

import {
  Container,
  DateContainer,
  DivForm,
  DivOptions,
  GenderContainer,
  H1,
  TextBox,
} from "./styles";

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
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
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

  const handleClickShowPassword = () => {
    showPassword === false ? setshowPassword(true) : setshowPassword(false);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowConfirmationPassword = () => {
    showConfirmPassword === false
      ? setShowConfirmPassword(true)
      : setShowConfirmPassword(false);
  };

  const handleMouseDownConfirmationPassword = (
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

  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    console.log(text);
  };

  return (
    <Container>
      <div className="container-fluid text-center text-md-left">
        <Row>
          <Col md={3}></Col>
          <DivForm className="col-md-6 col-md-offset-1">
            <H1>Cadastre-se</H1>
            <FormControl sx={{ m: 1, width: 440 }}>
              <ThemeProvider theme={theme}>
                <TextBox
                  id="outlined-basic-name"
                  label="Nome"
                  variant="outlined"
                  onChange={(event: any) => setName(event.target.value)}
                />
              </ThemeProvider>
            </FormControl>
            <br />
            <GenderContainer>
              <FormLabel component="legend">Gênero:</FormLabel>
              <DivOptions>
                <FormControlLabel
                  value="1"
                  control={
                    <Checkbox
                      onChange={() => setGenderChecked(1)}
                      sx={{
                        color: "#ccc",
                        "&.Mui-checked": {
                          color: "#662275",
                        },
                      }}
                    />
                  }
                  label="Masculino"
                  labelPlacement="end"
                  checked={genderChecked === 1}
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Checkbox
                      onChange={() => setGenderChecked(2)}
                      sx={{
                        color: "#ccc",
                        "&.Mui-checked": {
                          color: "#662275",
                        },
                      }}
                    />
                  }
                  label="Feminino"
                  labelPlacement="end"
                  checked={genderChecked === 2}
                />
              </DivOptions>
            </GenderContainer>
            <br />
            <ThemeProvider theme={theme}>
              <DateContainer>
                <FormLabel component="legend">Data de Nascimento:</FormLabel>
                <FormControl sx={{ m: 1, width: 90 }}>
                  <TextBox
                    id="outlined-basic-day"
                    label="Dia"
                    variant="outlined"
                    inputProps={{ maxLength: 2 }}
                    onChange={(event: any) => setDay(event.target.value)}
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: 150 }}>
                  <InputLabel>Mês</InputLabel>
                  <Select
                    onChange={(event: any) => {
                      setMonth(event.target.value);
                    }}
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
                    inputProps={{ maxLength: 4 }}
                    onChange={(event: any) => setYear(event.target.value)}
                  />
                </FormControl>
              </DateContainer>
            </ThemeProvider>{" "}
            <br />
            <ThemeProvider theme={theme}>
              <FormControl sx={{ m: 1, width: 440 }}>
                <TextBox
                  id="outlined-basic-email"
                  label="Email"
                  variant="outlined"
                  onChange={(event: any) => setEmail(event.target.value)}
                />
              </FormControl>
            </ThemeProvider>
            <br />
            <ThemeProvider theme={theme}>
              <FormControl sx={{ m: 1, width: 440 }}>
                <TextBox
                  id="outlined-basic-confirm-email"
                  label="Confirme o Email"
                  variant="outlined"
                  onChange={(event: any) => setConfirmEmail(event.target.value)}
                />
              </FormControl>
            </ThemeProvider>
            <br />
            <ThemeProvider theme={theme}>
              <FormControl sx={{ m: 1, width: 440 }} variant="outlined">
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Senha"
                />
              </FormControl>
            </ThemeProvider>
            <br />
            <ThemeProvider theme={theme}>
              <FormControl sx={{ m: 1, width: 440 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password-confirmation">
                  Confirme a Senha
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password-confirmation"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event: any) =>
                    setConfirmPassword(event.target.value)
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmationPassword}
                        onMouseDown={handleMouseDownConfirmationPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirme a Senha"
                />
              </FormControl>
            </ThemeProvider>
            <br />
            <SignUpButton 
              variant="contained"
              onClick={(e) => handleClick(e, "clicked")}
            >Cadastrar
            </SignUpButton>
          </DivForm>
          <Col md={3}></Col>
        </Row>
      </div>
    </Container>
  );
};

export default SignUp;
