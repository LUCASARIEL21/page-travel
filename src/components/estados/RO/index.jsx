import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Ro = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "blue" }} />
              Rondônia
            </S.tnx>
            <S.txt>RO</S.txt>
            <S.paragrafo>
              Rondônia é uma das 27 unidades federativas do Brasil. Está
              localizado na região Norte e tem como limites os estados de Mato
              Grosso a leste, Amazonas a norte, Acre a oeste e o Estado
              Plurinacional da Bolívia a oeste e sul.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=As%20Tr%C3%AAs%20Caixas%20d%27%C3%81gua&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTZX4tFP1zfMSDY2jC8zLdRSzE620s_JT04syczPgzOsEktKihKTQcxiAPo9LMg-AAAA&ved=0CBUQ4mhqFwoTCJjRjpyJqvsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DAs%252BTr%2525C3%2525AAs%252BCaixas%252Bd'%2525C3%252581gua%2526skpm%253D/g/1hc31_v5q%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>As Três Caixas d'Água</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Balne%C3%A1rio%20Rio%20das%20Gar%C3%A7as&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTZX4tVP1zc0TDbKzqqyLDLVUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgADa54lPwAAAA&ved=0CBoQ4mhqFwoTCJjRjpyJqvsCFQAAAAAdAAAAABAS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DBalne%2525C3%2525A1rio%252BRio%252Bdas%252BGar%2525C3%2525A7as%2526skpm%253D/g/11c2kjz9r5%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Balneário Rio das Garças</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Vale%20das%20Cachoeiras%20Water%20Park&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTZX4tZP1zcsqTApTMsp01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAduTeMz0AAAA&ved=0CB0Q4mhqFwoTCJjRjpyJqvsCFQAAAAAdAAAAABAa&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DVale%252Bdas%252BCachoeiras%252BWater%252BPark%2526skpm%253D/g/1tx4qflv%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Vale das Cachoeiras Water Park</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20de%20Paca%C3%A1s%20Novos&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKTZX4gIxjSvNDZMstRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAdLwiHzwAAAA&ved=0CBwQ4mhqFwoTCJjRjpyJqvsCFQAAAAAdAAAAABAj&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252Bde%252BPaca%2525C3%2525A1s%252BNovos%2526skpm%253D/m/03y71b9%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Parque Nacional de Pacaás Novos</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Ro;
