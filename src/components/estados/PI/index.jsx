import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Pi = ({ closeModal }) => {
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
              Piauí
            </S.tnx>
            <S.txt>PI</S.txt>
            <S.paragrafo>
              Piauí é um estado no nordeste do Brasil conhecido pelos parques
              nacionais. O Parque Nacional Serra da Capivara, no sudeste, possui
              sítios arqueológicos com pinturas rupestres pré-históricas. Nas
              proximidades, o Parque Nacional Serra das Confusões tem
              gigantescas formações rochosas e grandes áreas de caatinga
              (vegetação semiárida), onde vivem aves em risco de extinção. As
              mangueiras ladeiam as ruas da capital à beira-rio, Teresina.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20Serra%20da%20Capivara&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKcxSAjNNzQzNzbUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAKVZDW87AAAA&ved=0CBQQ4mhqFwoTCMC6gMaAqvsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252BSerra%252Bda%252BCapivara%2526skpm%253D/m/056177%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Parque Nacional Serra da Capivara</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20de%20Sete%20Cidades&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKcxS4gIxjSvNDTNKtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAyiRFzjwAAAA&ved=0CBQQ4mhqFwoTCMC6gMaAqvsCFQAAAAAdAAAAABAU&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252Bde%252BSete%252BCidades%2526skpm%253D/m/03y71ht%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Parque Nacional de Sete Cidades</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Praia%20do%20Coqueiro&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKcxS4tVP1zc0TDKrTKnKiLfUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAfQmrqPwAAAA&ved=0CBEQ4mhqFwoTCMC6gMaAqvsCFQAAAAAdAAAAABAd&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bdo%252BCoqueiro%2526skpm%253D/g/11b6ydzh_9%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Praia do Coqueiro</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Praia%20da%20Pedra%20do%20Sal&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKcxS4tVP1zc0TDIrSDO1zDbUUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAeeOd0PwAAAA&ved=0CB0Q4mhqFwoTCMC6gMaAqvsCFQAAAAAdAAAAABAk&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bda%252BPedra%252Bdo%252BSal%2526skpm%253D/g/11b6pf59k1%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Praia da Pedra do Sal</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Pi;
