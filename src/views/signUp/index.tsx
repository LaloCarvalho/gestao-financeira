import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import finances from "./assets/finances.jpg";
import React, { useEffect, useState } from "react";
import { SelectProps, PasswordState } from "../../types";
import { Container, DivForm, TextBox } from "./styles";

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<SelectProps>();
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [password, setPassword] = useState<PasswordState>({
    password: "",
    showPassword: false,
  });
  const [confirmPassword, setConfirmPassword] = useState<PasswordState>({
    password: "",
    showPassword: false,
  });
  const genders = [
    { value: 1, label: "Masculino" },
    { value: 2, label: "Feminino" },
  ];

  useEffect(() => {
    if (gender) console.log(gender);
  }, [gender]);

  useEffect(() => {
    if (email) console.log(email);
  }, [email]);

  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleClickShowConfirmationPassword = () => {
    setConfirmPassword({
      ...confirmPassword,
      showPassword: !confirmPassword.showPassword,
    });
  };

  const handleMouseDownConfirmationPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <DivForm className="col-md-6">
            <h1>Cadastre-se</h1>
            <FormControl sx={{ m: 1, width: 350 }}>
              <TextBox
                id="outlined-basic"
                label="Nome"
                variant="outlined"
                onChange={(event: any) => setName(event.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 350 }}>
              <InputLabel>Gênero</InputLabel>
              <Select
                onChange={(event: any) => setGender(event.target.value)}
                input={<OutlinedInput label="Gênero" />}
              >
                {genders.map((gender) => (
                  <MenuItem key={gender.label} value={gender.value}>
                    {gender.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 350 }}>
              <TextBox
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(event: any) => setEmail(event.target.value)}
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: 350 }}>
              <TextBox
                id="outlined-basic"
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
                type={password.showPassword ? "text" : "password"}
                value={password.password}
                onChange={(event: any) => setPassword(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {password.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Senha"
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: 350 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirme a Senha
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={confirmPassword.showPassword ? "text" : "password"}
                value={confirmPassword.password}
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
                      {confirmPassword.showPassword ? (
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
          </DivForm>
          <div className="col-md-6">
            <img
              alt=""
              src={finances}
              width="300"
              height="300"
              className="d-inline-block align-top"
            />{" "}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
