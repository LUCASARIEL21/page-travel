import styled from "styled-components";

export const navbar = styled.div`
  position: relative;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #435adb;
`;

export const logo = styled.div`
  display: flex;
  margin-left: 100px;
  a {
    font-size: 4rem;
    color: white;
  }
`;

export const op = styled.ul`
  display: flex;
  li {
    padding: 0 17px;
  }
  li a {
    font-weight: bold;
    color: #fff;
    font-size: 14px;
  }
`;
