import { render } from "@testing-library/react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "App.css";

/*import styled-component*/
import { Container } from "styles/app_style";
import { PageTitle } from "styles/page_style";

function Main() {
  return (
    <Container>
      <PageTitle>메인 페이지</PageTitle>
      <p>테스트 1</p>
      <p>테스트 2</p>
    </Container>
  );
}

export default Main;
