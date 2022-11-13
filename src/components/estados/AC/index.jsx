import React from "react";
import { Dialog } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import * as S from "./styles";

export const Ac = ({ closeModal, modal }) => {
  return (
    <Dialog
      open={modal}
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
              Acre
            </S.tnx>
            <S.txt>AC</S.txt>
            <S.paragrafo>
              O Acre é um dos sete estados situados na região Norte do Brasil.
              Sua capital é Rio Branco e a sigla AC. A população acreana é de
              803,5 mil habitantes, conforme a estimativa do IBGE (Instituto
              Brasileiro de Geografia e Estatística) para 2015. A área do Acre
              chega a 16.123,739 km2, de acordo com o IBGE. Hoje, há 4,47
              habitantes para cada quilômetro quadrado do estado. As cidades
              mais populosas, além da capital Rio Branco, são Cruzeiro do Sul,
              Feijó, Tarauacá e Sena Madureira. No total, o território abriga 22
              municípios.
            </S.paragrafo>
          </S.phuket>
        </S.content>
        <S.card>
          <a
            href="https://www.google.com/search?q=parque+ambiental+chico+mendes+em+rio+branco&hl=pt-BR&sxsrf=ALiCzsb1zEZ-WalSkojevmjFPJQHMVG6mQ%3A1667650952223&source=hp&ei=iFVmY--MC4rK5OUPromxgAQ&iflsig=AJiK0e8AAAAAY2ZjmH6zby7G5Ot9KNxQJhyNA_JEL2wz&gs_ssp=eJwFwUsSgyAMANBx2xnvkE1XLgRbP_EI3iKEoKiApdrx-H3vUdZzrTW_tuV3uFUV41PdqHuHjdi2I6eMwVHdHdObbNMjD4SutVN1UP5cAhSMl3jSDrx4ThAkWvmCBMg-gckUOf0B9WEgXg&oq=Parque+Ambiental+Chico+Mendes%2C+em+Rio+Branco&gs_lp=Egdnd3Mtd2l6uAEB-AEC-AEBKgIIADILEC4YgAQYxwEYrwHCAgcQIxjqAhgnwgIHEC4Y6gIYJ6gCCkjdIFDWEVjWEXABeADIAQCQAQCYAaUBoAGlAaoBAzAuMQ&sclient=gws-wiz"
            target="_blank"
          >
            <S.box1>
              <S.local1>Parque Ambiental Chico Mendes, Rio Branco</S.local1>
            </S.box1>
          </a>
          <a
            href="https://www.google.com/search?q=novo+mercado+velho+rio+branco&hl=pt-BR&sxsrf=ALiCzsa3qaPcW9BIbXmSIxZdLuRXaYumzg%3A1667651148939&ei=TFZmY536OInX1sQPquyI2AY&gs_ssp=eJwFwckJgDAQAED8CpYg5OPb3URylWAX5vJAs5iAaPfOtN24jogH1PTVekNjB3gNqqRDQs5RxEkGCy-PTpk0gZRCaZR87jM9xK5Y_BKIPfHciJWdmCtL9vQDIkQaDA&oq=Novo+Mercado+Velho+&gs_lp=Egxnd3Mtd2l6LXNlcnC4AQH4AQEqAggAMgsQLhivARjHARiABDILEC4YgAQYxwEYrwEyBhAAGBYYHsICChAAGEcY1gQYsAPCAg0QLhjHARivARiwAxhDwgIHEAAYsAMYQ5AGCkieEVDwBVjwBXABeAHIAQCQAQCYAbABoAGwAaoBAzAuMeIDBCBBGADiAwQgRhgAiAYB&sclient=gws-wiz-serp"
            target="_blank"
          >
            <S.box2>
              <S.local2>Novo Mercado Velho, Rio Branco</S.local2>
            </S.box2>
          </a>
          <a
            href="https://www.google.com/search?q=Pal%C3%A1cio+de+Rio+Branco&bih=964&biw=960&hl=pt-BR&sxsrf=ALiCzsaB0DIrynf4WDC7rGg1xGjrIMlD0Q%3A1667651300038&source=hp&ei=5FZmY-0YsIfh1Q-Wo4ww&iflsig=AJiK0e8AAAAAY2Zk9KzGwjpw8-Rih-3n5X6ammGSgbv9&ved=0ahUKEwjtmuKahZf7AhWwQ7gEHZYRAwYQ4dUDCAg&uact=5&oq=Pal%C3%A1cio+de+Rio+Branco&gs_lp=Egdnd3Mtd2l6uAED-AEC-AEBMgsQLhiABBjHARivATIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjWBVAAWABwAHgAyAEAkAEAmAGxAaABsQGqAQMwLjE&sclient=gws-wiz/"
            target="_blank"
          >
            <S.box3>
              <S.local3>Palácio de Rio Branco</S.local3>
            </S.box3>
          </a>
          <a
            href="https://www.google.com/search?bih=964&biw=960&hl=pt-BR&sxsrf=ALiCzsazcxcqkEvR9C8hMfc2kkQRoOkR5g:1667651302723&q=Pra%C3%A7a+da+Revolu%C3%A7%C3%A3o&stick=H4sIAAAAAAAAAONQFuLWT9c3NDIyL6jKMlfiBXEMs9JzzS3TynNPMSJLnmKEyCYbZ2eUFaRlnWLkAfELSqrKc9IKs6CKy3KyMlKysmFaDbOMDI2rYFoRBoO1VuaWFZqXG8fDpQ2K0yqLiwt_MRoEpeYklqSmKJTkKwQk5hxemJyZrxAExE5FiXnJ-QqJeSkKvqlFyYkp-QphqTkZ-btYkJ26iwXVwEWsogFFiYeXJyqkJCoEpZbl55QeXn54cf4ENsZbbJIMph9bmRpVDok1Lv8bUr1u2uJ_XecEdVkkvAHNsqsXHgEAAA&sa=X&lei=5lZmY4jlK4fL1sQP_sKyuAo"
            target="_blank"
          >
            <S.box4>
              <S.local4>Praça da Revolução Acreana</S.local4>
            </S.box4>
          </a>
        </S.card>
      </S.component>
    </Dialog>
  );
};

export default Ac;
