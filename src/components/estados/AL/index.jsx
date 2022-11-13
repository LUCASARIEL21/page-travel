import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Al = ({ closeModal, modal }) => {
  return (
    <Dialog
      open={modal}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.component>
        <S.butsair onClick={() => closeModal(false)}>X</S.butsair>
        <S.content>
          <S.phuket>
            <S.tnx>
              <LocationOnIcon style={{ color: "#4891ed" }} />
              Alagoas
            </S.tnx>
            <S.txt>Al</S.txt>
            <S.paragrafo>
              "Alagoas é um estado brasileiro que compõe a Região Nordeste, com
              capital no município de Maceió. Seu relevo é formado por
              depressões e planaltos, e os climas encontrados no estado são
              semiárido e tropical. A atual população alagoana é de pouco mais
              de 3,35 milhões de habitantes, vivendo a maioria nas cidades.
              Atualmente, a economia alagoana se destaca pela produção de
              cana-de-açúcar e pela indústria ligada a esse cultivo.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Catedral+Metropolitana+alagoas&sxsrf=ALiCzsYDmKYEdu5rTV__o27slSdzsEE_6w%3A1667875742128&ei=nsNpY9C_B9PN1sQPtamZ-A8&ved=0ahUKEwjQho6pyZ37AhXTppUCHbVUBv8Q4dUDCA8&uact=5&oq=Catedral+Metropolitana+alagoas&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeOgsILhCvARDHARCABDoLCC4QgAQQxwEQrwE6CwgAEIAEELEDEIMBOgUIIRCgAUoECE0YAUoECEEYAEoECEYYAFAAWMhbYL9daABwAXgAgAGbAogB_w2SAQUwLjYuM5gBAKABAqABAcABAQ&sclient=gws-wiz-serp"
            target="_blank"
          >
            <S.box1>
              <S.local1>Catedral Metropolitana</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=maragogi+alagoas&sxsrf=ALiCzsadsLuUhOoSiUgVWkk6MXQBd3UCmA%3A1667875825700&ei=8cNpY7GjKtPe1sQP2pOQUA&gs_ssp=eJzj4tVP1zc0TKpIK7coMDQ1YPQSyE0sSkzPT89USMwB0onFAKuhCs4&oq=Maragogi+alagoas&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgoILhCxAxDUAhBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIECAAQQzIFCAAQgARKBAhNGAFKBAhBGABKBAhGGABQAFgAYLYMaABwAXgAgAGpAYgBqQGSAQMwLjGYAQCgAQKgAQHAAQE&sclient=gws-wiz-serp"
            target="_blank"
          >
            <S.box2>
              <S.local2>Praia de Maragogi</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=praia+de+ponta+verde&sxsrf=ALiCzsbZYWB9lbUfwQzKhjUdyV2S5httgw%3A1667876002953&ei=osRpY-jYOYzQ1sQPvYSuiAk&gs_ssp=eJzj4tTP1TcwN6xKLzNg9BIpKErMTFRISVUoyM8rSVQoSy1KSQUAqjUKyw&oq=Praia+de+Ponta+Verde&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgsILhCvARDHARCABDoNCC4QxwEQrwEQ6gIQJzoHCC4Q6gIQJzoHCCMQ6gIQJ0oECEEYAEoECEYYAFCQB1iQB2C1E2gAcAB4AIAB9QGIAbQDkgEFMC4xLjGYAQCgAQGgAQKwAQrAAQE&sclient=gws-wiz-serp"
            target="_blank"
          >
            <S.box3>
              <S.local3>Praia de Ponta Verde</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=pontal+da+barra&sxsrf=ALiCzsbjkXDN4gHOyGBQigIwbVMUaRMUJw%3A1667876055366&ei=18RpY7T8FciO4dUPmJO2yA4&gs_ssp=eJzj4tZP1zc0MkpONslNMmD04i_IzytJzFFISVRISiwqSgQAhpwJXg&oq=Pontal+da+Barra&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMggILhDUAhCABDIFCAAQgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQrwEyBQgAEIAEMgUIABCABEoECEEYAEoECEYYAFAAWABgig5oAHAAeACAAZQCiAGUApIBAzItMZgBAKABAqABAcABAQ&sclient=gws-wiz-serp"
            target="_blank"
          >
            <S.box4>
              <S.local4>Pontal da Barra</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Al;
