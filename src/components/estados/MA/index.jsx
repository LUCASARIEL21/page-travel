import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Ma = ({ closeModal }) => {
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
              Maranhão
            </S.tnx>
            <S.txt>MA</S.txt>
            <S.paragrafo>
              Maranhão, estado no nordeste brasileiro, é formado em parte pela
              Floresta Amazônica e pelas praias ao longo do Oceano Atlântico.
              Próximo à cidade de Barreirinhas, grandes dunas de areia branca
              criam paisagens que lembram um deserto no Parque Nacional Lençóis
              Maranhenses, onde lagoas de água fresca nas quais se pode nadar se
              formam durante a temporada de chuvas. É na capital, São Luís, que
              se encontra o agitado bairro histórico conhecido como Reviver.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20dos%20Len%C3%A7%C3%B3is%20Maranhenses&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMa5UAjOTcrIyjLUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAH_tWOU7AAAA&ved=0CBYQ4mhqFwoTCICm9J7xqfsCFQAAAAAdAAAAABAL&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252Bdos%252BLen%2525C3%2525A7%2525C3%2525B3is%252BMaranhenses%2526skpm%253D/m/0bljh3%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Parque Nacional dos Lençóis Maranhenses</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20da%20Chapada%20das%20Mesas&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMa5U4gIxjSvNDXMqtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAukxlCTwAAAA&ved=0CBQQ4mhqFwoTCICm9J7xqfsCFQAAAAAdAAAAABAU&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252Bda%252BChapada%252Bdas%252BMesas%2526skpm%253D/m/03y71lx%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Parque Nacional da Chapada das Mesas</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Pal%C3%A1cio%20dos%20Le%C3%B5es&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMa5U4tZP1zc0MsooKDTJ0FLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAB13beT0AAAA&ved=0CBQQ4mhqFwoTCICm9J7xqfsCFQAAAAAdAAAAABAe&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DPal%2525C3%2525A1cio%252Bdos%252BLe%2525C3%2525B5es%2526skpm%253D/g/122hpq4h%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Palácio dos Leões</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Catedral%20Metropolitana%20de%20S%C3%A3o%20Luis%20-%20Nossa%20Senhora%20da%20Vit%C3%B3ria&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIMa5U4tFP1zcsNDMvLki3TNNSzE620s_JT04syczPgzOsEktKihKTQcxiACz3fVE-AAAA&ved=0CBcQ4mhqFwoTCICm9J7xqfsCFQAAAAAdAAAAABAm&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCatedral%252BMetropolitana%252Bde%252BS%2525C3%2525A3o%252BLuis%252B-%252BNossa%252BSenhora%252Bda%252BVit%2525C3%2525B3ria%2526skpm%253D/g/1q67spg9f%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Catedral Metropolitana de São Luis</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Ma;
