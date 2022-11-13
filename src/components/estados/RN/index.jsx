import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Rn = ({ closeModal }) => {
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
              Rio Grande do Norte
            </S.tnx>
            <S.txt>RN</S.txt>
            <S.paragrafo>
              Rio Grande do Norte é um estado na extremidade nordeste do Brasil.
              A capital, Natal, fica numa costa repleta de praias onde se
              encontra o Forte dos Reis Magos, em forma de estrela, um forte
              português do século XVI. Ponta Negra é uma praia enquadrada pela
              enorme duna, Morro do Careca, um símbolo da cidade. A sul, a Praia
              de Pipa é uma estância célebre pelo surf e pelos golfinhos.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Praia%20de%20Pipa&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKUpW4gIxjcxL8ipytBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAO7C_bDwAAAA&ved=0CBIQ4mhqFwoTCLjH8qGHqvsCFQAAAAAdAAAAABAO&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bde%252BPipa%2526skpm%253D/m/027tnxl%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Praia de Pipa</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20das%20Dunas%20-%20Bosque%20dos%20Namorados&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKUpW4gIxzUzy8goqtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAzzZ34jwAAAA&ved=0CBQQ4mhqFwoTCLjH8qGHqvsCFQAAAAAdAAAAABAZ&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252Bdas%252BDunas%252B-%252BBosque%252Bdos%252BNamorados%2526skpm%253D/m/064nnpx%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Parque das Dunas</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Lagoa%20do%20Carcar%C3%A1&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKUpW4tZP1zc0MjQyTSky1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIASzuyFz0AAAA&ved=0CBQQ4mhqFwoTCLjH8qGHqvsCFQAAAAAdAAAAABAk&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DLagoa%252Bdo%252BCarcar%2525C3%2525A1%2526skpm%253D/g/12125dr3%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Lagoa do Carcará</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Praia%20de%20Genipabu&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIKUpW4gIxTZONDIqrtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgA10DS5jwAAAA&ved=0CBIQ4mhqFwoTCLjH8qGHqvsCFQAAAAAdAAAAABAu&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPraia%252Bde%252BGenipabu%2526skpm%253D/m/05c20sz%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Praia de Genipabu</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Rn;
