import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Rs = ({ closeModal }) => {
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
              Rio Grande do sul
            </S.tnx>
            <S.txt>RS</S.txt>
            <S.paragrafo>
              Rio Grande do Sul é o estado mais a sul do Brasil e faz fronteira
              com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Gaúcha
              alberga a região vinícola do Vale dos Vinhedos e inclui cidades
              turísticas de estilo alemão como Gramado e Canela, famosas pelas
              paisagens naturais pitorescas. Porto Alegre, a capital, é um
              grande porto com estruturas clássicas como o Mercado Público e a
              Catedral Metropolitana, no centro histórico.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=C%C3%A2nion%20do%20Itaibezinho&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJt0xR4gIxkzMMUwortBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAHpGc-TwAAAA&ved=0CBgQ4mhqFwoTCKiWlLyMqvsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DC%2525C3%2525A2nion%252Bdo%252BItaibezinho%2526skpm%253D/m/0ch1dqx%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Cânion do Itaimbezinho</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Salto%20do%20Yucum%C3%A3&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJt0xR4tZP1zc0MiqrMClM0lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAEKf-BT0AAAA&ved=0CBQQ4mhqFwoTCKiWlLyMqvsCFQAAAAAdAAAAABAW&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DSalto%252Bdo%252BYucum%2525C3%2525A3%2526skpm%253D/g/122vx4qb%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Salto do Yucumã</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Canela%20Rio%20Grande%20do%20Sul&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJt0xRAjPNc-MLirUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYABkiiHk7AAAA&ved=0CBEQ4mhqFwoTCKiWlLyMqvsCFQAAAAAdAAAAABAi&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCanela%252BRio%252BGrande%252Bdo%252BSul%2526skpm%253D/m/07m_ps%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Canela Rio Grande do Sul</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=S%C3%A3o%20Miguel%20das%20Miss%C3%B5es&stick=H4sIAAAAAAAAAONgFuLUz9U3MMyJt0xRAjNTjA3M87QUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYACuLW6s7AAAA&ved=0CBEQ4mhqFwoTCKiWlLyMqvsCFQAAAAAdAAAAABAp&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DS%2525C3%2525A3o%252BMiguel%252Bdas%252BMiss%2525C3%2525B5es%2526skpm%253D/m/0d307n%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>São Miguel das Missões</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Rs;
