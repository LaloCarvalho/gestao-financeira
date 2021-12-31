import { createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { SelectProps } from "../../types";
import SignUpButton from "../../components/button";
import TextBox from "../../components/textBox";
import PasswordBox from "../../components/passwordBox";
import * as S from "./styles";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ThemeProvider,
} from "@mui/material";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<SelectProps>();
  const [year, setYear] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
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
    if (name) console.log(name);
  }, [name]);

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
    <S.Container className="container">
      <div className="row text-center">
        <div className="col-lg-12 col-md-12">
          <S.H1>Cadastre-se</S.H1>
          <TextBox
            width={350}
            id="outlined-basic-name"
            label="Nome"
            onChange={(event: any) => setName(event.target.value)}
          ></TextBox>
          <br />
          <S.GenderContainer>
            <FormLabel component="legend">Gênero</FormLabel>
            <S.DivOptions>
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
            </S.DivOptions>
          </S.GenderContainer>
          <br />
          <ThemeProvider theme={theme}>
            <S.DateContainer>
              <FormLabel component="legend">Data de Nascimento</FormLabel>
              <TextBox
                width={55}
                id="outlined-basic-day"
                label="Dia"
                onChange={(event: any) => setDay(event.target.value)}
                inputProps={2}
              ></TextBox>
              <FormControl sx={{ m: 1, width: 130 }}>
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
              <TextBox
                width={85}
                id="outlined-basic-year"
                label="Ano"
                onChange={(event: any) => setYear(event.target.value)}
                inputProps={4}
              ></TextBox>
            </S.DateContainer>
          </ThemeProvider>
          <br />
          <TextBox
            width={350}
            id="outlined-basic-email"
            label="Email"
            onChange={(event: any) => setEmail(event.target.value)}
          ></TextBox>
          <br />
          <TextBox
            width={350}
            id="outlined-basic-confirm-email"
            label="Confirme o Email"
            onChange={(event: any) => setConfirmEmail(event.target.value)}
          ></TextBox>
          <br />
          <PasswordBox
            id="outlined-basic-password"
            onChange={(event: any) => setPassword(event.target.value)}
            label="Senha"
          ></PasswordBox>
          <br />
          <PasswordBox
            id="outlined-basic-password-confirmation"
            onChange={(event: any) => setConfirmPassword(event.target.value)}
            label="Confirme a Senha"
          ></PasswordBox>
          <br />
          <SignUpButton onClick={(e) => handleClick(e, "clicked")}>
            Cadastrar
          </SignUpButton>
        </div>
      </div>
    </S.Container>
  );
};

export default SignUp;
