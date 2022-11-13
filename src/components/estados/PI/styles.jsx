import styled from "styled-components";

export const component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  gap: 10px;
  padding: 0 15px;
  background-image: url("https://i.pinimg.com/originals/dd/81/2e/dd812e4c4687e82dada729ee74f00b10.jpg");
  background-size: cover;
  background-position: center;
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 475px;
  top: 60%;
  right: 50%;
  align-items: center;
`;

export const butsair = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: black;
  font-weight: 600;
  font-size: 16px;
`;

export const phuket = styled.div`
  color: black;
  padding: 25px;
  width: 50%;
`;

export const paragrafo = styled.p`
  color: white;
`;

export const txt = styled.h1`
  font-size: 5rem;
  color: black;
`;

export const tnx = styled.h2`
  font-size: 2rem;
  letter-spacing: 2.8px;
  color: black;
`;

export const card = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  padding: 10px;
  transition: 0.5s;
  width: 400px;
  margin-left: 50px;

  &:hover {
    transition: 0.3s;
    transform: translateY(-10px);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

export const box1 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQbYw9EYyfc54oEZqB3NuGf4oz1RCpSgvq0v83qf4otUVrBwm3eUXmIMS030D4x6AE2NM&usqp=CAU");
`;

export const box2 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/7a/Parque_Nacional_de_Sete_Cidades_-_Piau%C3%AD.jpg");
`;

export const box3 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://deltarioparnaiba.com.br/wp-content/uploads/2013/10/Praia-do-Coqueiro-009.jpg");
`;

export const box4 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://www.conhecaopiaui.com/images/posts/a-pedra-o-mar-e-o-sal-conheca-a-unica-praia-de-parnaiba-a-bela-pedra-do-sal_61609vuAwL.jpeg");
`;

export const local1 = styled.h2`
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-size: 1rem;
  letter-spacing: 1px;
`;
export const local2 = styled.h2`
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const local3 = styled.h2`
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const local4 = styled.h2`
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-size: 1rem;
  letter-spacing: 1px;
`;
export default styled.div`
  .text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
