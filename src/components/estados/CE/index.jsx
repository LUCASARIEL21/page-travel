import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Ce = ({ closeModal }) => {
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
              Ceará
            </S.tnx>
            <S.txt>CE</S.txt>
            <S.paragrafo>
              O Ceará, um estado do nordeste brasileiro, tem um interior
              montanhoso e um litoral atlântico com impressionantes falésias
              vermelhas. O balneário de Canoa Quebrada tem enormes dunas de
              areia rosadas e a Rua Dragão do Mar, muito movimentada e também
              conhecida como Broadway. A cidade isolada de Jericoacoara, cercada
              pelo Parque Nacional de Jericoacoara, repleto de dunas, é famosa
              por suas ruas de areia, pela prática de windsurfe e pelo pôr do
              sol incomum em tons de verde.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Praia%20do%20Futuro&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyUlT4tFP1zcsNjAzTypMqdJSzE620s_JT04syczPgzOsEktKihKTQcxiABqksZg-AAAA&ved=0CBYQ4mhqFwoTCKC8kdXtqPsCFQAAAAAdAAAAABAS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdo%252BFuturo%2526skpm%253D/g/1s067bqdz%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Praia do Futuro</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Praia+de+Iracema&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyUlT4gIx001NswsqtRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgANWYYXDwAAAA#fpstate=trskp&trifp=kpq%253DPraia%252Bde%252BIracema%2526skpm%253D/m/0g55kpy%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Praia de Iracema</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Beach%20Park&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyUlT4gIxTQoNM8yytRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAy6DEuzwAAAA&ved=0CBQQ4mhqFwoTCKC8kdXtqPsCFQAAAAAdAAAAABAj&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBeach%252BPark%2526skpm%253D/m/04q1h6k%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Beach Park</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Praia%20de%20Lagoinha&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyUlT4tFP1zesMjFJKi5Jz9BSzE620s_JT04syczPgzOsEktKihKTQcxiAN9Wbmc-AAAA&ved=0CBEQ4mhqFwoTCKC8kdXtqPsCFQAAAAAdAAAAABAz&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bde%252BLagoinha%2526skpm%253D/g/1z44bstgh%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Praia de Lagoinha</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Ce;
