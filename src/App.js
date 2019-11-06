import "./App.css";
import React, { Component, lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";
import Blog from "./Blog/Blog";

import Fullpage from './Fullpage';
// const Loading = () => <nav>Loading nav...</nav>
class App extends Component {

  render() {
    
    return (
      <div className="App">
          <Fullpage load={this.handleImageLoad} />
      </div>
    );
  }
}

export default App;
