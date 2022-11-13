import styled from "styled-components";

export const component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  gap: 10px;
  padding: 0 15px;
  background-image: url("https://i.pinimg.com/originals/6d/73/54/6d73544c88958da0a7be0681a4d6222a.jpg");
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
  background-image: url("https://s2.glbimg.com/3J2w1KusYOBPQLg0nTwrmpE7_BM=/0x0:1280x693/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/M/U/upblQfSHS6wEwdeB8tGw/drone-master-imagens-aereas.jpg");
`;

export const box2 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://portalamazonia.com/images/p/34372/b2ap3_medium_Captura-de-Tela-2021-11-01-as-09.22.1_20211101-142652_1.png");
`;

export const box3 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://s2.glbimg.com/69M2z5Jg1VZFrml8GVQTfrmG2J0=/0x0:799x533/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/B/R/duKD10SZuCSaBJMr2P7A/nova-orla-taumanan-ft-katarine-almeida-4-.jpg");
`;

export const box4 = styled.div`
  width: 90%;
  height: 220px;
  background-position: center;
  background-size: cover;
  position: relative;
  border-radius: 25px;
  cursor: pointer;
  background-image: url("https://media-cdn.tripadvisor.com/media/photo-s/0e/10/f8/8e/parque-nacional-do-monte.jpg");
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
