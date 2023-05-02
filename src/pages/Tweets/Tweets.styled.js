import styled from 'styled-components';

export const TweetsWrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const LoadMoreBtn = styled.button`
  height: 45px;
  line-height: 45px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  borders: none;
  outline: none;

  &:hover {
    background: #5cd3a8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
  @media screen and (min-width: 768px) {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
  }
`;