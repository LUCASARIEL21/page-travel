import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Pr = ({ closeModal }) => {
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
              Paraná
            </S.tnx>
            <S.txt>PR</S.txt>
            <S.paragrafo>
              Paraná é um estado no sul do Brasil que alberga as Cataratas do
              Iguaçu, com centenas de cascatas que se estendem ao longo da
              fronteira com a Argentina. Em torno das cataratas encontra-se o
              Parque Nacional do Iguaçu, uma floresta subtropical com diversas
              espécies selvagens, enquanto no norte se encontra a enorme
              barragem de Itaipu. Centenas de quilómetros a este, perto das
              praias atlânticas de Guaratuba e do grande porto de Paranaguá,
              fica a frondosa capital do estado, Curitiba.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Parque%20Vila%20Velha&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMU5T4tZP1zc0MkouyUg31VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA_g3TAD0AAAA&ved=0CBsQ4mhqFwoTCJCI85uEqvsCFQAAAAAdAAAAABAK&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BVila%252BVelha%2526skpm%253D/g/122cthg5%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Parque Vila Velha</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Cataratas%20do%20Igua%C3%A7u&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMU5T4gAxkyvNsrUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAMgT6uI6AAAA&ved=0CBwQ4mhqFwoTCJCI85uEqvsCFQAAAAAdAAAAABAS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCataratas%252Bdo%252BIgua%2525C3%2525A7u%2526skpm%253D/m/0cy6k%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Cataratas do Iguaçu</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Museu%20Oscar%20Niemeyer&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMU5T4gIxjQoL0uINtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAGNXSKzwAAAA&ved=0CBQQ4mhqFwoTCJCI85uEqvsCFQAAAAAdAAAAABAc&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252BOscar%252BNiemeyer%2526skpm%253D/m/02qpf_0%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Museu Oscar Niemeyer</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Foz%20do%20Igua%C3%A7u&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMU5TAjNNTIwqM7QUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYALuov0E7AAAA&ved=0CBEQ4mhqFwoTCJCI85uEqvsCFQAAAAAdAAAAABAj&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFoz%252Bdo%252BIgua%2525C3%2525A7u%2526skpm%253D/m/0442yh%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Foz do Iguaçu</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Pr;
