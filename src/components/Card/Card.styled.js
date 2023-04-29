import styled from "styled-components";

export const Item = styled.li`
  margin: 0 auto;
  width: 380px;
  height: 460px;
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
`;

export const ImgGoIt = styled.img`
  margin: 20px;
  width: 76px;
  height: 22px;
`;

export const ImgSign = styled.img`
  position: absolute;
  z-index: 1;
  top: 24.5%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const ImgLine = styled.img`
  position: absolute;
  z-index: 2;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
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
  margin-top: 234px;
`;

export const Followers = styled.p`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 26px;
`;

export const Btn = styled.p`
  margin: 0 auto;
  width: 196px;
  height: 50px;
  button: 36px;
  text-align: center;
  line-height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
