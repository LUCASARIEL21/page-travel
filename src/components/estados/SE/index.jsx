import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Se = ({ closeModal }) => {
  return (
    <Dialog
      open={true}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.component>
        <S.butsair onClick={() => closeModal(false)}>X</S.butsair>
        <S.content>
          <S.phuket>
            <S.tnx>
              <LocationOnIcon style={{ color: "yellowgreen" }} />
              Sergipe
            </S.tnx>
            <S.txt>SE</S.txt>
            <S.paragrafo>
              Sergipe, o estado mais pequeno do Brasil, situa-se na costa
              atlântica da região do nordeste. A capital, Aracaju, é conhecida
              pelas praias, tal como a Praia da Atalaia, com o seu longo
              passeio. Fundada em 1590, a antiga capital, São Cristóvão, alberga
              edifícios da era colonial, incluindo o convento e a Igreja de São
              Francisco, do século XVII. O Cânion do Xingó, no rio de São
              Francisco, ladeia um popular lago para passeios de barco.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Museu%20da%20Gente%20Sergipana%20Gov.%20Marcelo%20D%C3%A9da&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTFX4tFP1zfMSIpPK6zMLtdSzE620s_JT04syczPgzOsEktKihKTQcxiAAbj2RQ-AAAA&ved=0CCAQ4mhqFwoTCNCtjfqRqvsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252Bda%252BGente%252BSergipana%252BGov.%252BMarcelo%252BD%2525C3%2525A9da%2526skpm%253D/g/1hb_fqykw%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Museu da Gente Sergipana Gov. Marcelo Déda</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Arcos%20da%20Orla%20de%20Atalaia&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTFX4tVP1zc0TMu2SMlIis_RUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDS5iIpPwAAAA&ved=0CBQQ4mhqFwoTCNCtjfqRqvsCFQAAAAAdAAAAABAS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DArcos%252Bda%252BOrla%252Bde%252BAtalaia%2526skpm%253D/g/11fk8dhb_l%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Arcos da Orla de Atalaia</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Praia%20de%20Aruana%20Sergipe&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTFX4tVP1zc0zDIoM6iyyEvXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgBAFtPxPwAAAA&ved=0CB0Q4mhqFwoTCNCtjfqRqvsCFQAAAAAdAAAAABAa&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bde%252BAruana%252BSergipe%2526skpm%253D/g/11j0v0z8ng%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Praia de Aruana Sergipe</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Passarela%20do%20Caranguejo&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTFX4tFP1zesTMlOMTI0NdVSzE620s_JT04syczPgzOsEktKihKTQcxiAKERJH8-AAAA&ved=0CBkQ4mhqFwoTCNCtjfqRqvsCFQAAAAAdAAAAABAr&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPassarela%252Bdo%252BCaranguejo%2526skpm%253D/g/1ydkd2155%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Passarela do Caranguejo</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Se;
