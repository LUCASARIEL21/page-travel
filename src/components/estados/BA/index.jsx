import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Ba = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "blue" }} />
              Bahia
            </S.tnx>
            <S.txt>BA</S.txt>
            <S.paragrafo>
              A Bahia é um estado do nordeste brasileiro com paisagens que
              variam da costa tropical até a aridez do Sertão. A capital,
              Salvador, é conhecida por seu centro histórico, o Pelourinho, com
              uma rica arquitetura colonial do século XVII e assentado sobre a
              Baía de Todos-os-Santos. O Carnaval da cidade reúne foliões
              fantasiados que dançam ao som do samba e do axé em uma enorme
              festa de rua.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Bas%C3%ADlica%20do%20Senhor%20do%20Bonfim&stick=H4sIAAAAAAAAAONgFuLUz9U3MEy2SDZT4gIxjSosM6qytBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgA--Ur1zwAAAA&ved=0CB4Q4mhqFwoTCJj8wvnhqPsCFQAAAAAdAAAAABAP&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBas%2525C3%2525ADlica%252Bdo%252BSenhor%252Bdo%252BBonfim%2526skpm%253D/m/02x9hzj%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Basílica do Senhor do Bonfim</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20da%20Chapada%20Diamantina%20Bahia&stick=H4sIAAAAAAAAAONgFuLUz9U3MEy2SDZTAjONq9JyK7UUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAN-_RlI7AAAA&ved=0CBcQ4mhqFwoTCJj8wvnhqPsCFQAAAAAdAAAAABA4&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252Bda%252BChapada%252BDiamantina%252BBahia%2526skpm%253D/m/03zfmy%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Parque Nacional da Chapada Diamantina</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Praia%20do%20Porto%20da%20Barra&stick=H4sIAAAAAAAAAONgFuLUz9U3MEy2SDZT4gIxzaqK89INtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgA9TwDljwAAAA&ved=0CBYQ4mhqFwoTCJj8wvnhqPsCFQAAAAAdAAAAABBB&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdo%252BPorto%252Bda%252BBarra%2526skpm%253D/m/06zsng0%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Praia do Porto da Barra</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Centro%20Historico%20de%20Porto%20Seguro&stick=H4sIAAAAAAAAAONgFuLUz9U3MEy2SDZT4tVP1zc0TIk3z0jKNU_SUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAjLN97PwAAAA&ved=0CBEQ4mhqFwoTCJj8wvnhqPsCFQAAAAAdAAAAABBO&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCentro%252BHistorico%252Bde%252BPorto%252BSeguro%2526skpm%253D/g/11d_7hbm7b%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Centro Historico de Porto Seguro</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Ba;
