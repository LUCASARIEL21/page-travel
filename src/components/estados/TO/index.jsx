import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const To = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "yellow" }} />
              Tocantins
            </S.tnx>
            <S.txt>TO</S.txt>
            <S.paragrafo>
              Tocantins é um estado no centro do Brasil. Caracteriza-se pelo
              cerrado (prado seco e matagais), rios vastos e plantações de soja.
              A capital moderna, Palmas, foi construída propositadamente no
              centro geográfico do estado e está rodeada de colinas arborizadas.
              Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino
              de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas
              de água.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Pra%C3%A7a%20dos%20Girass%C3%B3is&stick=H4sIAAAAAAAAAONgFuLQz9U3SDHINlHi1U_XNzRMNi9OSs4wqdRSzE620s_JT04syczPgzOsEktKihKTQcxiADEkULc-AAAA&ved=0CBkQ4mhqFwoTCICS5diTqvsCFQAAAAAdAAAAABAK&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPra%2525C3%2525A7a%252Bdos%252BGirass%2525C3%2525B3is%2526skpm%253D/g/11c7sbch4y%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Praça dos Girassóis</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Estadual%20do%20Jalap%C3%A3o&stick=H4sIAAAAAAAAAONgFuLQz9U3SDHINlHi1k_XNzQyTDIsyynQUsxOttLPyU9OLMnMz4MzrBJLSooSk0HMYgBnDKLpPAAAAA&ved=0CBIQ4mhqFwoTCICS5diTqvsCFQAAAAAdAAAAABAS&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BEstadual%252Bdo%252BJalap%2525C3%2525A3o%2526skpm%253D/g/121b1vlp%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Parque Estadual do Jalapão</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Pal%C3%A1cio%20Araguaia&stick=H4sIAAAAAAAAAONgFuLQz9U3SDHINlHiArEqzbKNjTO0FLOTrfRz8pMTSzLz8-AMq8SSkqLEZBCzGADMnk_KOwAAAA&ved=0CBUQ4mhqFwoTCICS5diTqvsCFQAAAAAdAAAAABAc&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPal%2525C3%2525A1cio%252BAraguaia%2526skpm%253D/m/0y6k33h%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Palácio Araguaia</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Fervedouro%20do%20Cei%C3%A7a&stick=H4sIAAAAAAAAAONgFuLQz9U3SDHINlHi0U_XN6xMy8pKMUrP0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIACLaKBT0AAAA&ved=0CBcQ4mhqFwoTCICS5diTqvsCFQAAAAAdAAAAABAl&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DFervedouro%252Bdo%252BCei%2525C3%2525A7a%2526skpm%253D/g/1yfjjd2gh%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Fervedouro do Ceiça</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default To;
