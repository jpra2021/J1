import styled from "styled-components";
import { Link } from "react-router-dom";

//export each styling

//html에 없는 태그이므로 괄호 안에 넣어 확장한다.
export const Link_styled = styled(Link)`
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
`;
