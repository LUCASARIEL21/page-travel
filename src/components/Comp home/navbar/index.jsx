import React from "react";
import { HashLink } from "react-router-hash-link";
import FlightIcon from "@mui/icons-material/Flight";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.navbar>
      <S.logo>
        <a>
          <FlightIcon fontSize="10px" />
        </a>
      </S.logo>
      <S.op>
        <HashLink to="#todosestados">
          <li>
            <a to="#todosestados">Todos Estados</a>
          </li>
        </HashLink>
        <HashLink to="#maispopulares">
          <li>
            <a to="#maispopulares">Mais Populares</a>
          </li>
        </HashLink>
        <HashLink to="#sobre">
          <li>
            <a to="#sobre">Sobre</a>
          </li>
        </HashLink>
        <HashLink to="#credits">
          <li>
            <a to="#credits">Contato</a>
          </li>
        </HashLink>
      </S.op>
    </S.navbar>
  );
};

export default Navbar;
