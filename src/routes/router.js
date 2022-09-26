/*Grouping <Routes> in router.js*/
import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";

/*importing pages*/
import About from "pages/About";
import Projects from "pages/Projects";
import Main from "pages/Main";
import Skills from "pages/Skills";
import Connects from "pages/Connects";

//Make Object to export
export const ROUTES = {
  MAIN: {
    path: "/",
    Component: Main,
  },
  ABOUT: {
    path: "/about",
    Component: About,
  },
  PROJECTS: {
    path: "/projects",
    Component: Projects,
  },
  SKILLS: {
    path: "/skills",
    Component: Skills,
  },
  CONNECTS: {
    path: "/connect",
    Component: Connects,
  },
};

//export only values to use values in App.js
export const ROUTES_VALUES = Object.values(ROUTES);
