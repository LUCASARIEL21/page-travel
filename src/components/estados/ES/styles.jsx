import styled from "styled-components";

export const component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  gap: 10px;
  padding: 0 15px;
  background-image: url("https://i.pinimg.com/originals/1a/38/d1/1a38d18ec7cdc3a2dff5a998392cc200.jpg");
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
  background-image: url("https://cdn2.revistahoteis.com.br/wp-content/uploads/2020/07/ParquePedraAzul_DomingosMartins_ES_Foto_Marcelo-Moryan_MTUR.jpg");
`;

export const box2 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ea/71/09/parque-botanico-vale.jpg?w=1200&h=-1&s=1");
`;

export const box3 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://cdn.conventodapenha.org.br/wp-content/uploads/2021/01/19113915/DJI_0204-scaled.jpg");
`;

export const box4 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://setur.es.gov.br/Media/Setur/Galeria%20de%20Fotos/Vitoria/palacioanchietathiago.JPG");
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
