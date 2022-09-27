import { render } from "@testing-library/react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "App.css";
/*import styled-component*/
import { Container } from "styles/app_style";
import { PageTitle } from "styles/page_style";
function About() {
  return (
    <Container>
      <PageTitle>어바웃 페이지 임시</PageTitle>
    </Container>
  );
}

export default About;
