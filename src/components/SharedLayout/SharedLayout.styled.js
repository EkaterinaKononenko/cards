import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  padding: 20px;
  font-size: 18px;
  margin-right: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const TweetesLink = styled(NavLink)`
  text-decoration: none;
  padding: 20px;
  font-size: 18px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const Header = styled.header`
display: flex;
justify-content: center;
margin-top: 50px;
`;