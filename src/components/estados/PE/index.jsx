import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Pe = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "blueviolet" }} />
              Pernambuco
            </S.tnx>
            <S.txt>PE</S.txt>
            <S.paragrafo>
              Pernambuco é um estado no nordeste do Brasil, no Oceano Atlântico.
              A sua capital moderna, o Recife, inclui um porto, a cidade velha e
              a popular área balnear de Boa Viagem. Ao largo da costa, o
              arquipélago vulcânico de Fernando de Noronha possui uma linha
              costeira dentada, praias poucos urbanizadas e um parque marítimo.
              A sul do Recife, a praia de Porto de Galinhas, protegida por um
              recife, oferece piscinas naturais. A norte encontra-se Olinda, uma
              cidade colonial situada entre uma vegetação exuberante.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Instituto%20Ricardo%20Brennand&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKShQ4gIxjczMS-IrtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAjjC92zwAAAA&ved=0CBsQ4mhqFwoTCOi25fv9qfsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DInstituto%252BRicardo%252BBrennand%2526skpm%253D/m/0267t_x%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Instituto Ricardo Brennand</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Centro%20Hist%C3%B3rico%20de%20Olinda&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKShQ4tZP1zc0MkquyirL1VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA1lL4Bz0AAAA&ved=0CBgQ4mhqFwoTCOi25fv9qfsCFQAAAAAdAAAAABAU&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCentro%252BHist%2525C3%2525B3rico%252Bde%252BOlinda%2526skpm%253D/g/122czjvm%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Centro Histórico de Olinda</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Mirabilandia&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKShQ4gIx03PTspPStRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgA0RR68DwAAAA&ved=0CBsQ4mhqFwoTCOi25fv9qfsCFQAAAAAdAAAAABAe&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMirabilandia%2526skpm%253D/m/0gmfkbg%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Mirabilandia</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Torre%20Malakoff&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKShQ4gIxzaqyCg3KtRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgA20OizDwAAAA&ved=0CBQQ4mhqFwoTCOi25fv9qfsCFQAAAAAdAAAAABAl&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DTorre%252BMalakoff%2526skpm%253D/m/06zjq0w%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Torre Malakoff</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Pe;
