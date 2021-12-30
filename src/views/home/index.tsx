import React from "react";
import { Carousel } from "react-bootstrap";
import * as S from "./styles";
import carousel1 from "./assets/carousel1.png";
import carousel2 from "./assets/carousel2.png";
import carousel3 from "./assets/carousel3.png";
import financas from "./assets/financas.png";
import seguranca from "./assets/seguranca.png";
import cartao from "./assets/cartao.png";
import objetivo from "./assets/objetivo.png";
import relatorio from "./assets/relatorio.png";
import planejamento from "./assets/planejamento.png";
import check from "./assets/check.png";

const Home: React.FC = () => {
  return (
    <>
      <S.GrayBackground>
        <S.DivFirstBlock className="container-fluid">
          <div className="row">
            <Carousel fade className="col-lg-12 col-md-12 carousel-dark">
              <Carousel.Item interval={2000}>
                <S.ImgCarousel src={carousel1} alt="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <S.ImgCarousel src={carousel2} alt="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <S.ImgCarousel src={carousel3} alt="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </S.DivFirstBlock>
      </S.GrayBackground>

      <div className="container">
        <S.DivSecondBlock className="row">
          <S.DivText className="row col-lg-6 col-md-12">
            <S.Item className="col-lg-6 col-md-6">
              <S.H2>
                <S.ImgLi src={planejamento} alt="App" /> Planeje suas finanças
              </S.H2>
              <S.P>Faça orçamentos e mantenha seus gastos sob controle.</S.P>
            </S.Item>
            <S.Item className="col-lg-6 col-md-6">
              <S.H2>
                <S.ImgLi src={cartao} alt="App" /> Gerencie seus cartões
              </S.H2>
              <S.P>Acompanhe suas faturas e não seja pego de surpresa.</S.P>
            </S.Item>
            <S.Item className="col-lg-6 col-md-6">
              <S.H2>
                <S.ImgLi src={relatorio} alt="App" /> Acompanhe relatórios
              </S.H2>
              <S.P>Confira análises mensais sobre sua vida financeira.</S.P>
            </S.Item>
            <S.Item className="col-lg-6 col-md-6">
              <S.H2>
                <S.ImgLi src={objetivo} alt="App" /> Crie seus objetivos
              </S.H2>
              <S.P>Crie metas para juntar dinheiro e alcançar seus sonhos.</S.P>
            </S.Item>
          </S.DivText>
          <S.DivImg className="row col-lg-6 col-md-12">
            <S.Img src={financas} alt="App" />
          </S.DivImg>
        </S.DivSecondBlock>
      </div>

      <S.GrayBackground>
        <div className="container">
          <S.DivThirdBlock className="row">
            <S.DivTextThirdBlock className="row col-lg-12 col-md-12">
              <S.Item className="col-lg-4 col-md-6">
                <S.H2>Simples de usar</S.H2>
                <S.P>
                  O sistema foi desenhado para ser intuitivo e tornar sua
                  experiência cada vez mais natural. Em pouco tempo controla seu
                  dinheiro!
                </S.P>
              </S.Item>
              <S.Item className="col-lg-4 col-md-6">
                <S.H2>Mais autonomia</S.H2>
                <S.P>
                  No XXXX, você tem liberdade para organizar sua grana como você
                  achar melhor, sem automatizações obrigatórias ou acesso às
                  suas contas bancárias.
                </S.P>
              </S.Item>
              <S.Item className="col-lg-4 col-md-6">
                <S.H2>Previsibilidade garantida</S.H2>
                <S.P>
                  As faturas de todos os seus cartões de crédito reunidas em um
                  lugar só! Já imaginou? Tudo para garantir a previsibilidade
                  que você precisa.
                </S.P>
              </S.Item>
              <S.Item className="col-lg-4 col-md-6">
                <S.H2>Seu futuro mais seguro</S.H2>
                <S.P>
                  Com seu dinheiro organizado fica muito mais fácil planejar o
                  futuro. Para te ajudar, o XXXX te mostra previsões valiosas
                  das suas finanças.
                </S.P>
              </S.Item>
              <S.Item className="col-lg-4 col-md-6">
                <S.H2>Economize tempo e dinheiro</S.H2>
                <S.P>
                  Concentre suas informações financeiras em um único app, e não
                  perca tempo abrindo todos os aplicativos de banco para checar
                  seus gastos.
                </S.P>
              </S.Item>
              <S.Item className="col-lg-4 col-md-6">
                <S.H2>Suporte que funciona</S.H2>
                <S.P>
                  Dúvidas? Sugestões? Nosso suporte gente boa ajuda você! A
                  gente tá aqui para resolver seus problemas e deixar sua vida
                  mais tranquila.
                </S.P>
              </S.Item>
            </S.DivTextThirdBlock>
          </S.DivThirdBlock>
        </div>
      </S.GrayBackground>

      <div className="container">
        <S.DivFourthBlock className="row">
          <S.DivImgFourthBlock className="col-lg-6 col-md-12">
            <S.ImgSecurity src={seguranca} alt="App" />
          </S.DivImgFourthBlock>
          <S.DivTextFourthBlock className="row col-lg-6 col-md-12">
            <S.H1>A segurança que você precisa para evoluir a sua gestão</S.H1>
            <ul className="list-unstyled">
              <S.Li>
                <S.ImgLi src={check} alt="App" />
                &nbsp;Nós não pedimos sua senha do banco. Nem hoje, nem nunca.
              </S.Li>
              <S.Li>
                <S.ImgLi src={check} alt="App" />
                &nbsp;Facilidade de registrar e acompanhar seus gastos a
                qualquer momento.
              </S.Li>
              <S.Li>
                <S.ImgLi src={check} alt="App" />
                &nbsp;Gerencie as faturas de todos os seus cartão de crédito num
                único lugar.
              </S.Li>
              <S.Li>
                <S.ImgLi src={check} alt="App" />
                &nbsp;Importe os dados da sua planilha financeira e não comece
                do zero.
              </S.Li>
            </ul>
          </S.DivTextFourthBlock>
        </S.DivFourthBlock>
      </div>
    </>
  );
};

export default Home;
