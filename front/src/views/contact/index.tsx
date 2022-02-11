import {
  createTheme,
  FormControl,
  TextField,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import TextBox from "../../components/textBox";
import * as S from "./styles";
import Button from "../../components/button";
import contactUs from "./assets/contactUs.png";

const Contact: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#662275",
      },
    },
  });

  return (
    <S.Container className="container">
      <div className="row text-center">
        <S.LeftDiv className="col-lg-6 col-md-12">
          <S.Img src={contactUs} alt="Contact Us" />
        </S.LeftDiv>

        <S.RightDiv className="col-lg-6 col-md-12">
          <S.H1>Fale conosco</S.H1>
          <TextBox
            width={350}
            id="outlined-basic-name"
            label="Email"
            onChange={(event: any) => setEmail(event.target.value)}
          ></TextBox>
          <br />
          <TextBox
            width={350}
            id="outlined-basic-name"
            label="Assunto"
            onChange={(event: any) => setSubject(event.target.value)}
          ></TextBox>
          <br />
          <FormControl sx={{ m: 1, width: 350 }}>
            <ThemeProvider theme={theme}>
              <TextField
                id="outlined-textarea"
                label="Descrição"
                multiline
                rows={5}
                onChange={(event: any) => setDescription(event.target.value)}
              />
            </ThemeProvider>
          </FormControl><br />
          <Button
            onClick={() => {
              console.log("alow");
            }}
          >
            Enviar
          </Button>
        </S.RightDiv>
      </div>
    </S.Container>
  );
};

export default Contact;
