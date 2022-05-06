import { createTheme } from "@mui/material/styles";
import React, { useContext, useEffect, useState } from "react";
import { SelectProps } from "../../types";
import SignUpButton from "../../components/button";
import TextBox from "../../components/textBox";
import PasswordBox from "../../components/passwordBox";
import * as S from "./styles";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import Swal from 'sweetalert2';
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ThemeProvider,
} from "@mui/material";
import { Login } from "@mui/icons-material";
import { ServicesContext } from "../../hooks";

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
  const { api } = useContext(ServicesContext);

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

  const Register = () => {
    try {
      if (!name)
        throw new Error('Por favor, preencha o nome!');
      if (!password)
        throw new Error('Por favor, preencha a senha!');
      if (!email)
        throw new Error('Por favor, preencha o email!');
      if (!confirmPassword)
        throw new Error('Por favor, selecione preencha o o confirma a senha!');
      if (password != confirmPassword)
        throw new Error('As senha digitadas nao sao iguais!');
      api.user.postNewUser({
        name: name,
        email: email,
        password: password
      },
        api,
      )
        .then((result: any) => {
          setName(""); 
          setEmail(""); 
          setPassword(""); 
          setConfirmPassword("");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Cadastrado com sucesso!',
            toast: true,
            showConfirmButton: false,
            timer: 3000
          })
        })
        .catch((error: any) => {
          console.log(error.result)
        })
        .finally(() => {
        });

    } catch (e: any) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: e.message,
          toast: true,
          showConfirmButton: false,
          timer: 3000
        })
    }
  }

  return (
    <S.GrayBackground>
      <S.Container className="container text-center">
        <S.SubContainer className="row">
          <S.H1>Cadastre-se</S.H1>
          <S.DivButtomGoogle>
            <S.Button
              onClick={() => {
                console.log("alow");
              }}
            >
              <S.Img src={google} alt="Google" />Cadastrar-se com o Google
            </S.Button>
          </S.DivButtomGoogle>

          <S.Hr>
            <Divider>Ou</Divider>
          </S.Hr>

          <S.LeftDiv className="col-lg-6 col-md-12">
            <TextBox
              width={350}
              id="outlined-basic-name"
              label="Nome"
              value={name}
              onChange={(event: any) => setName(event.target.value)}
            ></TextBox>
            {/* <ThemeProvider theme={theme}>
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
            </ThemeProvider> */}
            <PasswordBox
              id="outlined-basic-password"
              onChange={(event: any) => setPassword(event.target.value)}
              label="Senha"
              value={password}
            ></PasswordBox>
          </S.LeftDiv>

          <S.RightDiv className="col-lg-6 col-md-12">
            <TextBox
              width={350}
              id="outlined-basic-email"
              label="Email"
              value={email}
              onChange={(event: any) => setEmail(event.target.value)}
            ></TextBox>
            {/* <S.GenderContainer>
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
            </S.GenderContainer> */}
            <PasswordBox
              id="outlined-basic-password-confirmation"
              value={confirmPassword}
              onChange={(event: any) => setConfirmPassword(event.target.value)}
              label="Confirme a Senha"
            ></PasswordBox>
          </S.RightDiv>
          <S.DivButtom>
            <SignUpButton
              onClick={() => {
                Register();
              }}
            >
              Cadastrar
            </SignUpButton>
          </S.DivButtom>
          <S.H3>
            Já é Usuário? <S.A href="/signIn">Faça Login</S.A>
          </S.H3>
        </S.SubContainer>
      </S.Container>
    </S.GrayBackground>
  );
};

export default SignUp;
