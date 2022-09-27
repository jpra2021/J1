//import "App.css";
import { useMemo, useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

/* importing router's values for <Routes>*/
import { ROUTES_VALUES } from "routes/router";

/*import styled-component*/
import { Link_styled, Navi, Header_name } from "styles/app_style";

function App() {
  //mapping routes
  const routes = useMemo(() => {
    return ROUTES_VALUES.map(({ path, Component }, idx) => {
      return <Route key={idx} path={path} element={<Component />} />;
    });
  }, []);

  return (
    <>
      <BrowserRouter className="App">
        <div>
          <header>
            <div>
              <Header_name>JW Lee</Header_name>
            </div>
          </header>
          <Navi>
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
          </Navi>
        </div>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
