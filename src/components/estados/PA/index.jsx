import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Pa = ({ closeModal }) => {
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
              Pará
            </S.tnx>
            <S.txt>PA</S.txt>
            <S.paragrafo>
              Pará, um estado no norte do Brasil, é onde se encontra o Parque
              Nacional da Amazônia. Protegendo uma extensa faixa da exuberante e
              densa Floresta Amazônica, o parque é lar de milhares de espécies
              da vida selvagem. Boa parte dela é alagada todos os anos, tornando
              o acesso a áreas distantes somente por barco. Próxima da
              desembocadura do Rio Amazonas está Belém, a capital do Pará. Ela é
              conhecida pela arquitetura colonial e pelo mercado Ver-o-Peso às
              margens do rio.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Alter%20do%20Ch%C3%A3o%20Santar%C3%A9m&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyStQ4gIxTdNMy8uytRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAqZvO3jwAAAA&ved=0CBEQ4mhqFwoTCMjnofz4qfsCFQAAAAAdAAAAABAK&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DAlter%252Bdo%252BCh%2525C3%2525A3o%252BSantar%2525C3%2525A9m%2526skpm%253D/m/05f5wvk%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Alter do Chão Santarém</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Museu%20Paraense%20Em%C3%ADlio%20Goeldi&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyStQAjPNDIvNC7QUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYANiO-oY7AAAA&ved=0CBwQ4mhqFwoTCMjnofz4qfsCFQAAAAAdAAAAABAR&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252BParaense%252BEm%2525C3%2525ADlio%252BGoeldi%2526skpm%253D/m/061s7p%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Museu Paraense Emílio Goeldi</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Bas%C3%ADlica%20Santu%C3%A1rio%20de%20Nossa%20Senhora%20de%20Nazar%C3%A9&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyStQ4tZP1zc0MjbLrbLM01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAE4BLED0AAAA&ved=0CBYQ4mhqFwoTCMjnofz4qfsCFQAAAAAdAAAAABAZ&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBas%2525C3%2525ADlica%252BSantu%2525C3%2525A1rio%252Bde%252BNossa%252BSenhora%252Bde%252BNazar%2525C3%2525A9%2526skpm%253D/g/1236mz9n%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Basílica Santuário de Nossa Senhora de Nazaré</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Zoobot%C3%A2nico%20Mangal%20das%20Gar%C3%A7as&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyStQ4tZP1zc0MqqKLykq01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAAfgOlj0AAAA&ved=0CBgQ4mhqFwoTCMjnofz4qfsCFQAAAAAdAAAAABAh&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BZoobot%2525C3%2525A2nico%252BMangal%252Bdas%252BGar%2525C3%2525A7as%2526skpm%253D/g/122z_trv%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Parque Zoobotânico Mangal das Garças</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Pa;
