import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Es = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "pink" }} />
              Espírito Santo
            </S.tnx>
            <S.txt>ES</S.txt>
            <S.paragrafo>
              O Espírito Santo, estado da região Sudeste do Brasil, é conhecido
              por suas praias tropicais e áreas naturais montanhosas
              preservadas. Fundada em 1551, Vitória, capital e cidade portuária,
              tem um pequeno centro da era colonial. Do outro lado da estreita
              baía de Vitória, fica Vila Velha, com a movimentada Praia da Costa
              e o Convento da Penha, construção do século XVI que fica no alto
              de um penhasco e oferece uma vista panorâmica.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Parque%20Estadual%20da%20Pedra%20Azul&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIsqUxS4gIxjSvNDUuMtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAFDyTiDwAAAA&ved=0CBQQ4mhqFwoTCNjXidegqfsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BEstadual%252Bda%252BPedra%252BAzul%2526skpm%253D/m/03y71t2%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Parque Estadual da Pedra Azul</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Bot%C3%A2nico%20Vale&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIsqUxS4tZP1zc0MsyrSM_J0VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIArHKTSz0AAAA&ved=0CB0Q4mhqFwoTCNjXidegqfsCFQAAAAAdAAAAABAn&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BBot%2525C3%2525A2nico%252BVale%2526skpm%253D/g/121nxgll%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Parque Botânico Vale</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Convento%20da%20Penha&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIsqUxSAjONDSwKLbUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAIUNoBw7AAAA&ved=0CB4Q4mhqFwoTCNjXidegqfsCFQAAAAAdAAAAABA2&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DConvento%252Bda%252BPenha%2526skpm%253D/m/0308q9%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Convento da Penha</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Pal%C3%A1cio%20Anchieta%20Esp%C3%ADrito%20Santo&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIsqUxS4tZP1zc0MjIxNLKw0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA_XOLMj0AAAA&ved=0CB4Q4mhqFwoTCNjXidegqfsCFQAAAAAdAAAAABBH&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPal%2525C3%2525A1cio%252BAnchieta%252BEsp%2525C3%2525ADrito%252BSanto%2526skpm%253D/g/12241288%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Palácio Anchieta Espírito Santo</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Es;
