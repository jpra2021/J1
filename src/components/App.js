import logo from "logo.svg";
import "App.css";
import { useMemo, useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

/* importing router's values for <Routes>*/
import { ROUTES_VALUES } from "routes/router";

/*import styled-component*/
import { Link_styled } from "styles/app_style";

function App() {
  //mapping routes
  const routes = useMemo(() => {
    return ROUTES_VALUES.map(({ path, Component }, idx) => {
      return <Route key={idx} path={path} element={<Component />} />;
    });
  }, []);

  return (
    <BrowserRouter className="App">
      <div>
        <header>
          <div className="main_title">
            <h1>JW Lee</h1>
          </div>
        </header>
        <nav>
          <div className="navi-bar">
            <ul>
              <Link_styled to="/about" className="Link">
                About
              </Link_styled>
              <Link_styled to="/projects" className="Link">
                Projects
              </Link_styled>
              <Link_styled to="/" className="Link">
                JW Lee
              </Link_styled>
              <Link_styled to="/skills" className="Link">
                Skills
              </Link_styled>
              <Link_styled to="connect" className="Link">
                Connect
              </Link_styled>
              <Button primary>테스트</Button>
            </ul>
          </div>
        </nav>
      </div>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
}

export default App;

const Button = styled.button`
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-size: 1em;
`;
