import React, { useState } from "react";
import Button from "../../components/button";
import TextBox from "../../components/textBox";
import PasswordBox from "../../components/passwordBox";
import { Container, H1 } from "./styles";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Container>
      <H1>Faça seu login</H1>
      <TextBox
        width={440}
        id="outlined-basic-email"
        label="Email"
        onChange={(event: any) => setEmail(event.target.value)}
      ></TextBox>
      <br />
      <PasswordBox
        id="outlined-basic-password"
        onChange={(event: any) => setPassword(event.target.value)}
        label="Senha"
      ></PasswordBox>
      <br />
      <Button
        onClick={() => {
          console.log("alow");
        }}
      >
        Login
      </Button>
    </Container>
  );
};

export default SignIn;
