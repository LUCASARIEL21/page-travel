import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Pb = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "red" }} />
              Paraíba
            </S.tnx>
            <S.txt>PB</S.txt>
            <S.paragrafo>
              Paraíba, um estado no nordeste do Brasil, é conhecido pela linha
              da costa tropical e pela arquitetura colonial portuguesa. A
              capital, João Pessoa, possui praias como a Manaíra e Tambaú, além
              de locais de mergulho repletos de corais ao largo da costa. Junto
              ao rio Paraíba, o centro histórico da cidade possui casas
              coloridas e a igreja de São Francisco, com uma arquitetura
              barroca. A Ponta do Seixas, com o farol Cabo Branco nas
              proximidades, marca o ponto mais a leste das Américas.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Farol%20do%20Cabo%20Branco&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTBV4gIxk41LigsrtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAIMTapjwAAAA&ved=0CBQQ4mhqFwoTCKiW9aX7qfsCFQAAAAAdAAAAABAm&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFarol%252Bdo%252BCabo%252BBranco%2526skpm%253D/m/0c3tsqx%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Farol do Cabo Branco</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Piscinas%20Naturais%20Do%20Seixas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTBV4tVP1zc0zDIoSSozNizXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgBwD8znPwAAAA&ved=0CBwQ4mhqFwoTCKiW9aX7qfsCFQAAAAAdAAAAABAt&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPiscinas%252BNaturais%252BDo%252BSeixas%2526skpm%253D/g/11j0tbv31w%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Piscinas Naturais Do Seixas</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20da%20Lagoa%20-%20Solon%20de%20Lucena&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTBV4tZP1zc0MqoqTDYz0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIACELgWj0AAAA&ved=0CBQQ4mhqFwoTCKiW9aX7qfsCFQAAAAAdAAAAABA4&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bda%252BLagoa%252B-%252BSolon%252Bde%252BLucena%2526skpm%253D/g/122zqc60%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Parque da Lagoa - Solon de Lucena</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Praia%20de%20Tamba%C3%BA%20praia&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTBV4tFP1zesMi4xMknLM9JSzE620s_JT04syczPgzOsEktKihKTQcxiAMXwGbw-AAAA&ved=0CBQQ4mhqFwoTCKiW9aX7qfsCFQAAAAAdAAAAABBB&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bde%252BTamba%2525C3%2525BA%252Bpraia%2526skpm%253D/g/1z3t24fn2%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Praia de Tambaú praia</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Pb;
