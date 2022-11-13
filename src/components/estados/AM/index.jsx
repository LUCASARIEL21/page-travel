import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Am = ({ closeModal }) => {
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
              Amazonas
            </S.tnx>
            <S.txt>Am</S.txt>
            <S.paragrafo>
              Amazonas é um enorme estado no noroeste do Brasil, coberto quase
              na sua totalidade pela floresta tropical da Amazónia. A capital,
              Manaus, é um porto fluvial com pontos de referência que datam do
              ciclo da borracha de finais do século XIX, incluindo o Teatro
              Amazonas, uma grande casa de ópera. A cidade marca o "Encontro das
              Águas", onde o rio Negro, de água negra, e o rio Solimões se
              juntam para formar o rio Amazonas.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Teatro+Amazonas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIya5UAjMts7PMDLQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAHDKeBw7AAAA#fpstate=trskp&trifp=kpq%253DTeatro%252BAmazonas%2526skpm%253D/m/09kj60%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Teatro Amazonas</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Encontro%20das%20%C3%81guas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIya5U4gIxTbKy0w3ztBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAvsUfrzwAAAA&ved=0CBkQ4mhqFwoTCIiN_KXcqPsCFQAAAAAdAAAAABAS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DEncontro%252Bdas%252B%2525C3%252581guas%2526skpm%253D/m/04jkg1n%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Encontro das Águas</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Museu%20da%20Amaz%C3%B4nia%20-%20MUSA&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIya5U4tZP1zc0MkzLMcrJ1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAjULabT0AAAA&ved=0CB4Q4mhqFwoTCIiN_KXcqPsCFQAAAAAdAAAAABAa&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252Bda%252BAmaz%2525C3%2525B4nia%252B-%252BMUSA%2526skpm%253D/g/121fl2lk%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Museu da Amazônia - MUSA</S.local3>
            </S.box3>
          </a>
          <a
            href="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSXFvn-HwJ1LK3vzmaLBwEW3QWpM9oQMSISk8t5JX9k6XFUQBZuM3A8IVdUErXtyNNHNqMXyWF9lHg27rkuh_msXA"
            target="_blank"
          >
            <S.box4>
              <S.local4>Praia da Ponta Negra Manaus</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Am;
