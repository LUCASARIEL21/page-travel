import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Sc = ({ closeModal }) => {
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
              Santa Catarina
            </S.tnx>
            <S.txt>SC</S.txt>
            <S.paragrafo>
              Santa Catarina é um estado na região sul do Brasil. Com uma longa
              costa com o Atlântico e muitas ilhas, ela é conhecida por suas
              praias e montanhas. Florianópolis, a capital, tem um mercado
              público tradicional com bares, restaurantes e barracas de comida,
              além de um museu histórico instalado em um palácio do governo
              colonial do século 19. Florianópolis está basicamente na ilha de
              Santa Catarina, que conta com resorts de praia na extremidade
              norte.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Beto%20Carrero%20World&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJz6pS4gIxjcuTS0oqtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAtZPyVzwAAAA&ved=0CBsQ4mhqFwoTCOjzicyQqvsCFQAAAAAdAAAAABAM&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBeto%252BCarrero%252BWorld%2526skpm%253D/m/03wcttx%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Beto Carrero World</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Unipraias&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJz6pS4tVP1zc0TM4zyDU0ySrRUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgCYguf4PwAAAA&ved=0CBQQ4mhqFwoTCOjzicyQqvsCFQAAAAAdAAAAABAV&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BUnipraias%2526skpm%253D/g/11cn0m14jt%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Parque Unipraias</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Vila%20Germ%C3%A2nica&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJz6pS4tZP1zc0MkquijfP1VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA-y-PRD0AAAA&ved=0CBIQ4mhqFwoTCOjzicyQqvsCFQAAAAAdAAAAABAg&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BVila%252BGerm%2525C3%2525A2nica%2526skpm%253D/g/122cz_7m%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Parque Vila Germânica</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Serra%20do%20Rio%20do%20Rastro&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJz6pS4gIxzUzjS0yStRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAyj4LQzwAAAA&ved=0CBIQ4mhqFwoTCOjzicyQqvsCFQAAAAAdAAAAABAn&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DSerra%252Bdo%252BRio%252Bdo%252BRastro%2526skpm%253D/m/065_t4c%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Serra do Rio do Rastro</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Sc;
