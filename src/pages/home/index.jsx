import React from "react";
import Credits from "../../components/Comp home/creditos";
import Navbar from "../../components/Comp home/navbar";
import Populares from "../../components/Comp home/populares";
import Estados from "../../components/Comp home/todos estados";
import * as S from "./styles";

const Home = () => {
  return (
    <>
      <Navbar />
      <S.container>
        <Populares />
        <Estados />
      </S.container>
      <Credits />
    </>
  );
};

export default Home;
