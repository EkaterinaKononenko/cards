import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const HomeImg = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;