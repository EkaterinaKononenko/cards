import styled from "styled-components";

export const CardList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  @media screen and (min-width: 768px) {
    gap: 28px;
  }
  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;