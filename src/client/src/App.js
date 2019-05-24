/*
Import extenal libraries
*/
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

/*
Import Main application
*/
import Main from "./app/Main";

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Router>
          <Main />
        </Router>
      </ParallaxProvider>
    );
  }
}

export default App;
