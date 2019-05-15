
import './App.css';
import Fullpage from './Fullpage';
import React, { Component } from 'react';

import { Preloader, Placeholder } from 'react-preloading-screen';
class App extends Component {

  render() {
    const imgurl = require('./media/introback.jpg')
    let style={
      backgroundImage: `linear-gradient(
        to right bottom,
        rgba(0,0,0, .6),
        rgba(0,0,0, .6)),
        url(${imgurl})`
    }
    return (

        <Fullpage />

    );
  }
}

export default App;