import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Ap = ({ closeModal }) => {
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
              Amapá
            </S.tnx>
            <S.txt>Ap</S.txt>
            <S.paragrafo>
              Amapá é um estado no norte do Brasil que faz fronteira com o
              Suriname, a Guiana Francesa e o Oceano Atlântico. A floresta
              amazónica abrange uma grande parte da sua área e o rio Oiapoque
              faz parte da sua fronteira a norte. No sul, a capital, Macapá, é
              conhecida pela Fortaleza de São José de Macapá, situada à
              beira-mar, um forte português do século XVIII, e pelo Monumento do
              Marco Zero, um obelisco que marca o equador.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Fortaleza%20de%20S%C3%A3o%20Jos%C3%A9%20de%20Macap%C3%A1&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIybJU4tVP1zc0TDItM6wwS8vWUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgAgkFEtPwAAAA&ved=0CBQQ4mhqFwoTCNCSl_LfqPsCFQAAAAAdAAAAABAR&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFortaleza%252Bde%252BS%2525C3%2525A3o%252BJos%2525C3%2525A9%252Bde%252BMacap%2525C3%2525A1%2526skpm%253D/g/11b5v1x6fk%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Fortaleza de São José de Macapá</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Museu%20Sacaca&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIybJU4tZP1zc0MrbMKqxI0VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAhhWGVj0AAAA&ved=0CB0Q4mhqFwoTCNCSl_LfqPsCFQAAAAAdAAAAABAY&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252BSacaca%2526skpm%253D/g/1239jqxd%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Museu Sacaca</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Marco%20Zero%20do%20Equator%20em%20Macap%C3%A1%20Macap%C3%A1&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIybJU4tZP1zc0MshOSi8w11LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAaRX3_D0AAAA&ved=0CB4Q4mhqFwoTCNCSl_LfqPsCFQAAAAAdAAAAABAi&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMarco%252BZero%252Bdo%252BEquator%252Bem%252BMacap%2525C3%2525A1%252BMacap%2525C3%2525A1%2526skpm%253D/g/120kbgp7%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Marco Zero do Equador em Macapá</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20Montanhas%20do%20Tumucumaque&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIybJU4gAxsw0y0rQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYANEtI5o6AAAA&ved=0CBIQ4mhqFwoTCNCSl_LfqPsCFQAAAAAdAAAAABAy&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252BMontanhas%252Bdo%252BTumucumaque%2526skpm%253D/m/0k0hf%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Parque Nacional Montanhas do Tumucumaque</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Ap;
