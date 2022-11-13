import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Ms = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "skyblue" }} />
              Mato Grosso do Sul
            </S.tnx>
            <S.txt>MS</S.txt>
            <S.paragrafo>
              Mato Grosso do Sul é uma das 27 unidades federativas do Brasil.
              Localiza-se no sul da Região Centro-Oeste. Limita-se com cinco
              estados brasileiros: Mato Grosso, Goiás e Minas Gerais, São Paulo
              e Paraná; e dois países sul-americanos: Paraguai e Bolívia.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Gruta%20do%20Lago%20Azul&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyTNV4tZP1zc0MsorKS_P0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAniroND0AAAA&ved=0CBsQ4mhqFwoTCNDpncj0qfsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DGruta%252Bdo%252BLago%252BAzul%2526skpm%253D/g/122ntwwh%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Gruta do Lago Azul</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20das%20Na%C3%A7%C3%B5es%20Ind%C3%ADgenas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyTNV4tZP1zc0MrQ0NDEy1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAgC52UD0AAAA&ved=0CB4Q4mhqFwoTCNDpncj0qfsCFQAAAAAdAAAAABAT&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bdas%252BNa%2525C3%2525A7%2525C3%2525B5es%252BInd%2525C3%2525ADgenas%2526skpm%253D/g/12191423%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Parque das Nações Indígenas</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Cachoeira%20Boca%20da%20On%C3%A7a&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyTNV4tVP1zc0TDauzC1PzzLXUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgDsPx58PwAAAA&ved=0CB0Q4mhqFwoTCNDpncj0qfsCFQAAAAAdAAAAABAb&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCachoeira%252BBoca%252Bda%252BOn%2525C3%2525A7a%2526skpm%253D/g/11c3ymwgj7%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Cachoeira Boca da Onça</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Recanto%20Ecol%C3%B3gico%20Rio%20da%20Prata%20-%20Flutua%C3%A7%C3%A3o%20em%20Bonito%20MS&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyTNV4tFP1zesTMuIz04zNtRSzE620s_JT04syczPgzOsEktKihKTQcxiAEVsT8M-AAAA&ved=0CCYQ4mhqFwoTCNDpncj0qfsCFQAAAAAdAAAAABAm&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DRecanto%252BEcol%2525C3%2525B3gico%252BRio%252Bda%252BPrata%252B-%252BFlutua%2525C3%2525A7%2525C3%2525A3o%252Bem%252BBonito%252BMS%2526skpm%253D/g/1yfh_kf31%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Recanto Ecológico Rio da Prata</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Ms;
