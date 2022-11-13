import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Sp = ({ closeModal }) => {
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
              São Paulo
            </S.tnx>
            <S.txt>SP</S.txt>
            <S.paragrafo>
              "São Paulo é um estado brasileiro da região Sudeste. Trata-se da
              unidade de federação mais populosa do país, com 46 milhões de
              pessoas, e abriga também a cidade com maior concentração de
              habitantes do Brasil, que é a sua capital. O estado possui clima
              Tropical e relevo caracterizado pela presença de planaltos e
              depressões. Ainda no século XX, São Paulo se tornou um dos
              principais centros econômicos do Brasil."
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Parque%20Ibirapuera&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIqSMtVAjMtzeMLzbQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYANYOEzQ7AAAA&ved=0CB4Q4mhqFwoTCIDuzv_9pPsCFQAAAAAdAAAAABAT&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BIbirapuera%2526skpm%253D/m/097_q6%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Parque Ibirapuera</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Museu%20de%20Arte%20de%20S%C3%A3o%20Paulo%20Assis%20Chateaubriand&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIqSMtVgjDjs03KtBSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgABNRiBDsAAAA&ved=0CB4Q4mhqFwoTCIDuzv_9pPsCFQAAAAAdAAAAABAc&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252Bde%252BArte%252Bde%252BS%2525C3%2525A3o%252BPaulo%252BAssis%252BChateaubriand%2526skpm%253D/m/02_k4v%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>
                Museu de Arte de São Paulo Assis Chateaubriand
              </S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Catedral%20Metropolitana%20de%20S%C3%A3o%20Paulo&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIqSMtVAjMtq0yys7UUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYAGoYJtY7AAAA&ved=0CBgQ4mhqFwoTCIDuzv_9pPsCFQAAAAAdAAAAABAp&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DCatedral%252BMetropolitana%252Bde%252BS%2525C3%2525A3o%252BPaulo%2526skpm%253D/m/09z4kk%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Catedral Metropolitana de São Paulo</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Museu%20do%20Futebol%20S%C3%A3o%20Paulo&stick=H4sIAAAAAAAAAONgFuLUz9U3MDIqSMtV4tZP1zc0MqwotEhK01LMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIAAfHumj0AAAA&ved=0CCYQ4mhqFwoTCIDuzv_9pPsCFQAAAAAdAAAAABAy&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DMuseu%252Bdo%252BFutebol%252BS%2525C3%2525A3o%252BPaulo%2526skpm%253D/g/121xq8bf%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Museu do Futebol</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Sp;
