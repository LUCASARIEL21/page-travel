import React from "react";
import TrackVisibility from "react-on-screen";
import linkedin from "../../../assets/linkedin.svg";
import github from "../../../assets/github.svg";
import insta from "../../../assets/insta.svg";
import contactImg from "../../../assets/contact-img.svg";
import * as S from "./styles";

const Credits = () => {
  return (
    <S.credits id="credits">
      <S.logoc src={contactImg} />
      <S.txt>Contato</S.txt>
      <S.social>
        <a href="https://www.linkedin.com/in/lucas-ariel-0ab3721ba/">
          <img src={linkedin} alt="Icon" />
        </a>
        <a href="https://github.com/LUCASARIEL21">
          <img src={github} alt="Icon" />
        </a>
        <a href="https://www.instagram.com/lucas_arielfran/?hl=el">
          <img src={insta} alt="Icon" />
        </a>
      </S.social>
    </S.credits>
  );
};

export default Credits;
