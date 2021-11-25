import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "../../components/button";
import TextBox from "../../components/textBox";
import PasswordBox from "../../components/passwordBox";
import { Container, DivForm, H1 } from "./styles";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  

  return (
    <Container>
      <div className="container-fluid text-center text-md-left">
        <Row>
          <Col md={3}></Col>
          <DivForm className="col-md-6 col-md-offset-1">
            <H1>Faça seu login</H1>
            <TextBox
              width={440}
              id="outlined-basic-email"
              label="Email"
              onChange={(event: any) => setEmail(event.target.value)}
            >
            </TextBox><br/>
            <PasswordBox
              id="outlined-basic-password"
              onChange={(event: any) => setPassword(event.target.value)}
              label="Senha"
            >
            </PasswordBox><br/>
            <Button onClick={() => { console.log("alow"); }}>
              Login
            </Button>
          </DivForm>
          <Col md={3}></Col>
        </Row>
      </div>
    </Container>
  );
};

export default SignIn;
