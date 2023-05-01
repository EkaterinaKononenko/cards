import styled from "styled-components";

export const Item = styled.li`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 300px;
  height: 380px;
  position: relative;
  list-style: none;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    margin: 0;
    width: 340px;
    height: 410px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 380px;
    height: 460px;
  }
`;

export const ImgGoIt = styled.img`
  margin: 20px;
  width: 60px;
  height: 15px;
  @media screen and (min-width: 768px) {
    width: 66px;
    height: 18px;
  }
  @media screen and (min-width: 1440px) {
    width: 76px;
    height: 22px;
  }
`;

export const ImgSign = styled.img`
  position: absolute;
  z-index: 1;
  top: 24.5%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 240px;
  height: 128px;
  @media screen and (min-width: 768px) {
    width: 260px;
    height: 148px;
  }
  @media screen and (min-width: 1440px) {
    width: 308px;
    height: 168px;
  }
`;

export const ImgLine = styled.img`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 300px;
  height: 8px;
  @media screen and (min-width: 768px) {
    width: 340px;
  }
  @media screen and (min-width: 1440px) {
    width: 380px;
  }
`;

export const ImgAvatar = styled.img`
  position: absolute;
  width: 70px;
  height: 70px;
  z-index: 3;
  border-radius: 50%;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  object-fit: cover;
`;

export const ImgEllipse = styled.img`
  position: absolute;
  z-index: 4;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const TweetsText = styled.p`
  text-align: center;
  margin-top: 180px;
  @media screen and (min-width: 768px) {
    margin-top: 195px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 234px;
  }
`;

export const Followers = styled.p`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 13px;
    margin-bottom: 23px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    margin-bottom: 26px;
  }
`;

export const Btn = styled.p`
  margin: 0 auto;
  width: 176px;
  height: 45px;
  button: 36px;
  text-align: center;
  line-height: 45px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  @media screen and (min-width: 768px) {
    width: 186px;
    height: 48px;
    line-height: 48px;
  }
  @media screen and (min-width: 1440px) {
    width: 196px;
    height: 50px;
    line-height: 50px;
  }
`;
