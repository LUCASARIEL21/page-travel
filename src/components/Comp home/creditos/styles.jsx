import styled from "styled-components";

export const credits = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 18vh;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #435adb;
`;

export const txt = styled.h5`
  display: flex;
  font-size: 30px;
  font-weight: 900;
`;

export const logoc = styled.img`
  display: flex;
  width: 30%;
  height: 80%;
`;

export const social = styled.div`
  display: flex;
  a {
    width: 42px;
    height: 42px;
    background: rgba(217, 217, 217, 0.1);
    display: inline-flex;
    border-radius: 50%;
    margin-right: 6px;
    align-items: center;
    justify-content: center;
    line-height: 1;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  a::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }
  a:hover::before {
    transform: scale(1);
  }
  a img {
    width: 40%;
    z-index: 1;
    transition: 0.3s ease-in-out;
  }
`;
