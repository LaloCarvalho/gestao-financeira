import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/button";
import TextBox from "../../components/textBox";
import PasswordBox from "../../components/passwordBox";
import * as S from "./styles";
import google from "./assets/google.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import Swal from 'sweetalert2';
import { SecurityContext, ServicesContext } from "../../hooks";
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { User } from "../../types";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { api, setToken } = useContext(ServicesContext);
  const { User, SetUser } = useContext(SecurityContext);
  let navigate = useNavigate();

  const Login = () => {
    try {
      if (!email)
        throw new Error('Por favor, preencha o email!');
      if (!password)
        throw new Error('Por favor, preencha a senha!');
      api.user.postLogin({
        name: "",
        email: email,
        password: password
      },
        api,
      )
        .then((result: any) => {
          setEmail("");
          setPassword("");
          SetUser(result.data);
          setToken(result.data.accessToken);          
          navigate("../userHome", { replace: true });
        })
        .catch((error: any) => {
          console.log(error.result)
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Email ou senha inválidos!',
            toast: true,
            showConfirmButton: false,
            timer: 3000
          })
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

  useEffect(() => {
    if (User) {
      navigate("../userHome", { replace: true });
    }
  }, [User]);

  return (
    <S.GrayBackground>
      <S.Container className="container">
        <S.SubContainer className="row text-center">
          <S.H1>Faça seu login</S.H1>
          <S.LeftDiv className="col-lg-6 col-md-12">
            <S.Button
              onClick={() => {
                console.log("alow");
              }}
            >
              <S.Img src={twitter} alt="Twitter" />Entrar com o Twitter
            </S.Button>
            <S.Button
              onClick={() => {
                console.log("alow");
              }}
            >
              <S.ImgFacebook src={facebook} alt="Facebook" />Entrar com o Facebook
            </S.Button>
            <S.Button
              onClick={() => {
                console.log("alow");
              }}
            >
              <S.Img src={google} alt="Google" />Entrar com o Google
            </S.Button>
          </S.LeftDiv>

          <S.RightDiv className="col-lg-6 col-md-12">
            <div>
              <TextBox
                width={350}
                id="outlined-basic-email"
                value={email}
                label="Email"
                onChange={(event: any) => setEmail(event.target.value)}
              ></TextBox>
              <PasswordBox
                id="outlined-basic-password"
                onChange={(event: any) => setPassword(event.target.value)}
                value={password}
                label="Senha"
                link={<S.A href="#!">Esqueci minha senha</S.A>}
              ></PasswordBox>
            </div>
            <div>
              <Button
                onClick={() => {
                  Login();
                }}
              >
                Login
              </Button>
            </div>
          </S.RightDiv>
          <S.H3>Novo usuário? <S.A href="/signUp">Cadastre-se</S.A></S.H3>
        </S.SubContainer>
      </S.Container>
    </S.GrayBackground>
  );
};

export default SignIn;
