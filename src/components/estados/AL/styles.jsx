import styled from "styled-components";

export const component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  gap: 10px;
  padding: 0 15px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/d/d9/Macei%C3%B3%2C_capital_de_Alagoas.jpg");
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
  background-image: url("https://www.praiasdemaceio.com/wp-content/uploads/2017/04/Catedral-Metropolitana-de-Macei%C3%B3.jpg");
`;

export const box2 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://www.viagensecaminhos.com/wp-content/uploads/2014/10/maragogi-alagoas.jpg");
`;

export const box3 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://s3q7j5f5.stackpathcdn.com/wp-content/uploads/2022/05/praia-de-ponta-verde.jpg");
`;

export const box4 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://www.viajantecomum.com/wp-content/uploads/2019/05/por-do-sol-pontal-da-barra-maceio.jpg");
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
