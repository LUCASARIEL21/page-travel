import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Mg = ({ closeModal }) => {
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
              Minas Gerais
            </S.tnx>
            <S.txt>MG</S.txt>
            <S.paragrafo>
              Minas Gerais, um grande estado continental no sudeste do Brasil, é
              conhecido por cidades da era colonial que remetem à corrida do
              ouro no país no século 18. Entre elas estão São João del Rei,
              Tiradentes e Ouro Preto, a antiga capital, todas com ruas de
              paralelepípedo, mansões ornamentadas e igrejas barrocas decoradas
              pelo escultor Aleijadinho.O famoso trem a vapor Maria Fumaça liga
              Tiradentes a São João del Rei.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Capit%C3%B3lio%20Minas%20Gerais&stick=H4sIAAAAAAAAAONgFuLUz9U3MEzPMKtS4gIxTbKS4k0qtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAviZ1WDwAAAA&ved=0CBEQ4mhqFwoTCLDymb3yqfsCFQAAAAAdAAAAABAT&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCapit%2525C3%2525B3lio%252BMinas%252BGerais%2526skpm%253D/m/04jb_4x%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Capitólio Minas Gerais</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Ouro%20Preto&stick=H4sIAAAAAAAAAONgFuLUz9U3MEzPMKtSgjBLclIqtRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAn8fQvjsAAAA&ved=0CBEQ4mhqFwoTCLDymb3yqfsCFQAAAAAdAAAAABAc&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DOuro%252BPreto%2526skpm%253D/m/01tldy%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Ouro Preto</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Tiradentes%20Minas%20Gerais&stick=H4sIAAAAAAAAAONgFuLUz9U3MEzPMKtSAjMtkvKqDLUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYANwCaa07AAAA&ved=0CBEQ4mhqFwoTCLDymb3yqfsCFQAAAAAdAAAAABAr&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DTiradentes%252BMinas%252BGerais%2526skpm%253D/m/08bnz1%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Tiradentes Minas Gerais</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=S%C3%A3o%20Jo%C3%A3o%20del%20Rei&stick=H4sIAAAAAAAAAONgFuLUz9U3MEzPMKtSAjNNy0oMsrUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAGkprr47AAAA&ved=0CBEQ4mhqFwoTCLDymb3yqfsCFQAAAAAdAAAAABAz&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DS%2525C3%2525A3o%252BJo%2525C3%2525A3o%252Bdel%252BRei%2526skpm%253D/m/05vt0k%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>São João del Rei</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Mg;
