import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Go = ({ closeModal }) => {
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
              Goiás
            </S.tnx>
            <S.txt>GO</S.txt>
            <S.paragrafo>
              Goiás, um estado no centro do Brasil, alberga a savana acidentada,
              cidades da era colonial e uma agricultura de grande escala. O
              Parque Nacional da Chapada dos Veadeiros é uma reserva de
              montanhas paisagísticas com trilhos, rios, desfiladeiros e quedas
              de água. Fundadas durante o século XVIII, as cidades do ciclo de
              ouro de Pirenópolis e Goiás Velho (antiga capital do estado)
              distinguem-se pela arquitetura colonial portuguesa e pelas
              vibrantes festas cristãs.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Parque%20Nacional%20da%20Chapada%20dos%20Veadeiros&stick=H4sIAAAAAAAAAONgFuLUz9U3MDSqrIpXAjOTctIzzLQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYADjHEPk7AAAA&ved=0CBgQ4mhqFwoTCLCMv5vvqfsCFQAAAAAdAAAAABAY&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BNacional%252Bda%252BChapada%252Bdos%252BVeadeiros%2526skpm%253D/m/0blgh6%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Parque Nacional da Chapada dos Veadeiros</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Vale%20da%20Lua&stick=H4sIAAAAAAAAAONgFuLUz9U3MDSqrIpX4tZP1zc0MiqpirfI1VLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAku16lz0AAAA&ved=0CBcQ4mhqFwoTCLCMv5vvqfsCFQAAAAAdAAAAABAj&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DVale%252Bda%252BLua%2526skpm%253D/g/122tz_8m%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Vale da Lua</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Hot%20Park&stick=H4sIAAAAAAAAAONgFuLUz9U3MDSqrIpX4tFP1zc0NC5MKjY2ytVSzE620s_JT04syczPgzOsEktKihKTQcxiAG_kwyA-AAAA&ved=0CB8Q4mhqFwoTCLCMv5vvqfsCFQAAAAAdAAAAABAs&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DHot%252BPark%2526skpm%253D/g/113qbs32m%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Hot Park</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Caldas%20Novas&stick=H4sIAAAAAAAAAONgFuLUz9U3MDSqrIpXAjMts7PSkrQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAG1UQ-k7AAAA&ved=0CBEQ4mhqFwoTCLCMv5vvqfsCFQAAAAAdAAAAABA8&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCaldas%252BNovas%2526skpm%253D/m/09kjfb%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Caldas Novas</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Go;
