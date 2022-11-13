import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Mt = ({ closeModal }) => {
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
              <LocationOnIcon style={{ color: "blueviolet" }} />
              Mato Grosso
            </S.tnx>
            <S.txt>MT</S.txt>
            <S.paragrafo>
              Mato Grosso, um grande estado no centro-oeste brasileiro, é
              coberto na maioria pela floresta tropical amazónica, as zonas
              húmidas e as planícies da savana. A capital, Cuiabá, é um centro
              de viagens que remonta à corrida ao ouro do século XVIII. Nas
              proximidades, o Parque Nacional da Chapada dos Guimarães possui
              áreas de caminhada com penhascos em arenito, quedas de água e
              cavernas. As extensas zonas húmidas do Pantanal albergam diversas
              espécies selvagens, incluindo araras, caimões e jaguares.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=Nobres%20Mato%20Grosso&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyalUAjMzDIpNkrQUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYADoSYNM7AAAA&ved=0CBEQ4mhqFwoTCIDluJz2qfsCFQAAAAAdAAAAABAP&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DNobres%252BMato%252BGrosso%2526skpm%253D/m/0h0s4b%2526t%253Dd"
            target="_blank"
          >
            <S.box1>
              <S.local1>Nobres Mato Grosso</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=Chapada%20dos%20Guimar%C3%A3es%20munic%C3%ADpio&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyalUAjPTDXNL4rUUs5Ot9HPykxNLMvPz4AyrxJKSosRkELMYADKLFvI7AAAA&ved=0CBEQ4mhqFwoTCIDluJz2qfsCFQAAAAAdAAAAABAW&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DChapada%252Bdos%252BGuimar%2525C3%2525A3es%252Bmunic%2525C3%2525ADpio%2526skpm%253D/m/0g1mt_%2526t%253Dd"
            target="_blank"
          >
            <S.box2>
              <S.local2>Chapada dos Guimarães município</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Jaciara&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyalU4gIxLYtKiozLtRSzk630c_KTE0sy8_PgDKvEkpKixGQQsxgAMNQbTTwAAAA&ved=0CBUQ4mhqFwoTCIDluJz2qfsCFQAAAAAdAAAAABAe&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DJaciara%2526skpm%253D/m/09rtr3w%2526t%253Dd"
            target="_blank"
          >
            <S.box3>
              <S.local3>Jaciara</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?q=Parque%20M%C3%A3e%20Bonif%C3%A1cia&stick=H4sIAAAAAAAAAONgFuLUz9U3MMxIyalU4tZP1zc0MsowyEvO1lLMTrbSz8lPTizJzM-DM6wSS0qKEpNBzGIA08-hhD0AAAA&ved=0CBoQ4mhqFwoTCIDluJz2qfsCFQAAAAAdAAAAABAl&hl=pt-BR&gl=br#fpstate=trskp&trifp=kpq%253DParque%252BM%2525C3%2525A3e%252BBonif%2525C3%2525A1cia%2526skpm%253D/g/122h0nck%2526t%253Dd"
            target="_blank"
          >
            <S.box4>
              <S.local4>Parque Mãe Bonifácia</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Mt;
