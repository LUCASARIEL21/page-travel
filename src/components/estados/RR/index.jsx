import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Rr = ({ closeModal }) => {
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
              Roraima
            </S.tnx>
            <S.txt>RR</S.txt>
            <S.paragrafo>
              Roraima, o estado mais a norte do Brasil, é conhecido pela
              Floresta Amazónica. A capital, Boa Vista, na margem oeste de Rio
              Branco, fica próxima dos parques nacionais da Serra da Mocidade, a
              sudoeste, e do Monte Roraima, a norte. Com penhascos íngremes e um
              misterioso cume plano, o Monte Roraima, partilhado com a Venezuela
              e a Guiana, foi, presumivelmente, a inspiração de Sir Arthur Conan
              Doyle para "O Mundo Perdido".
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Serra%20do%20Tepequ%C3%A9m&stick=H4sIAAAAAAAAAONgFuLUz9U3MCwpjM9S4tZP1zc0MizLSSou0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAvKAU2j0AAAA&ved=0CBIQ4mhqFwoTCNigkqGLqvsCFQAAAAAdAAAAABAK&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DSerra%252Bdo%252BTepequ%2525C3%2525A9m%2526skpm%253D/g/121vlbsp%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Serra do Tepequém</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Monumento%20aos%20Pioneiros&stick=H4sIAAAAAAAAAONgFuLUz9U3MCwpjM9S4tVP1zc0TCpPLigxMi7QUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgC6arh8PwAAAA&ved=0CBsQ4mhqFwoTCNigkqGLqvsCFQAAAAAdAAAAABAR&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMonumento%252Baos%252BPioneiros%2526skpm%253D/g/11bwcpt23p%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Monumento aos Pioneiros</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Orla%20Taumanan&stick=H4sIAAAAAAAAAONgFuLUz9U3MCwpjM9S4tZP1zc0MjQyTSnO1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIANwcEqz0AAAA&ved=0CB4Q4mhqFwoTCNigkqGLqvsCFQAAAAAdAAAAABAY&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DOrla%252BTaumanan%2526skpm%253D/g/12125dsk%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Orla Taumanan</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20do%20Monte%20Roraima&stick=H4sIAAAAAAAAAONgFuLUz9U3MCwpjM9S4tFP1zfMSIpPM7MsTNZSzE620s_JT04syczPgzOsEktKihKTQcxiAHiJzu0-AAAA&ved=0CBIQ4mhqFwoTCNigkqGLqvsCFQAAAAAdAAAAABAj&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252Bdo%252BMonte%252BRoraima%2526skpm%253D/g/1hb_f69qc%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Parque Nacional do Monte Roraima</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Rr;
