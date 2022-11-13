import React from "react";
import "./slide.jsx";
import ImageSlider from "./slide";

const Populares = () => {
  const slides = [
    {
      sigla: "sp",
      url: "https://cetesb.sp.gov.br/wp-content/uploads/2018/05/saopaulo.jpg",
    },
    {
      sigla: "mg",
      url: "https://direcional.com.br/wp-content/uploads/2021/08/minas-gerais.jpg",
    },
    {
      sigla: "ba",
      url: "https://blog.123milhas.com/wp-content/uploads/2022/04/conheca-estado-bahia-conexao123.jpg",
    },
    {
      sigla: "rj",
      url: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/03/1-cristo-redentor.jpg",
    },
    {
      sigla: "rs",
      url: "https://s1.static.brasilescola.uol.com.br/be/2021/04/porto-alegre.jpg",
    },
  ];
  const containerStyles = {
    width: "800px",
    height: "400px",
    margin: "10px auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};
export default Populares;
