import styled from "styled-components";
import { Link } from "react-router-dom";

//export each styling

//container for each page
export const Container = styled.div`
  width: 80%;
  height: 100%;
  background: whitesmoke;
  margin: 0px auto;
  padding: 20px;
`;

//nav conainer
export const Navi = styled.nav`
  display: flex;
  width: 80%;
  height: 50px;
  background: darkgrey;
  margin: 0px auto;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

//html에 없는 태그이므로 괄호 안에 넣어 확장한다.
//nav links, children of nav container
export const Link_styled = styled(Link)`
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  color: black;
  text-decoration: none;
  box-shadow: none;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.3em;
`;

//header
export const Header_name = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  background: black;
  width: 100%;
  color: white;
  padding-left: 20px;
  font-size: calc(10px + 2vmin);
  text-align: center;
`;
