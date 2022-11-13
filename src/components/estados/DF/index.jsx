import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Df = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "green" }} />
              Distrito Federal
            </S.tnx>
            <S.txt>DF</S.txt>
            <S.paragrafo>
              Brasília, inaugurada como capital do Brasil em 1960, é uma cidade
              planeada que se distingue pela sua arquitetura branca e moderna,
              essencialmente concebida por Oscar Niemeyer. Disposta em forma de
              avião, a sua "fuselagem" é o Eixo Monumental, 2 avenidas amplas
              flanqueadas por um enorme parque. No "cockpit" encontra-se a Praça
              dos Três Poderes, cujo nome provém das 3 agências do governo que a
              rodeiam.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Pal%C3%A1cio%20do%20Planalto&stick=H4sIAAAAAAAAAONgFuLQz9U3MMyojFfiBLGSKuOrsrUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAFKzqK86AAAA&ved=0CBIQ4mhqFwoTCNCa-pufqfsCFQAAAAAdAAAAABAa&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPal%2525C3%2525A1cio%252Bdo%252BPlanalto%2526skpm%253D/m/0by_zk%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Palácio do Planalto</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Memorial%20JK&stick=H4sIAAAAAAAAAONgFuLQz9U3MMyojFfi0U_XNzQqNIk3zUgq0lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAeQUDYz0AAAA&ved=0CB4Q4mhqFwoTCNCa-pufqfsCFQAAAAAdAAAAABAn&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMemorial%252BJK%2526skpm%253D/g/12q4_5hbr%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Memorial JK</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Ponte%20Juscelino%20Kubitschek&stick=H4sIAAAAAAAAAONgFuLQz9U3MMyojFfiBLFMSwrzTLQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAG5Rdxw6AAAA&ved=0CBIQ4mhqFwoTCNCa-pufqfsCFQAAAAAdAAAAABAy&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPonte%252BJuscelino%252BKubitschek%2526skpm%253D/m/05tqn4%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Ponte Juscelino Kubitschek</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Catedral%20Metropolitana%20Nossa%20Senhora%20Aparecida&stick=H4sIAAAAAAAAAONgFuLQz9U3MMyojFfiBLHSTSoKy7UUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYABmuiiE6AAAA&ved=0CBgQ4mhqFwoTCNCa-pufqfsCFQAAAAAdAAAAABA9&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCatedral%252BMetropolitana%252BNossa%252BSenhora%252BAparecida%2526skpm%253D/m/0g4xqw%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>
                Catedral Metropolitana Nossa Senhora Aparecida
              </S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Df;
