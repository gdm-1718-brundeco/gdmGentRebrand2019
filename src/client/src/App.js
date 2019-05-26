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

require('./app/assets/images/favicon/android-chrome-256x256.png')

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
