
import './App.css';
import Fullpage from './Fullpage';
import React, { Component } from 'react';
import {Switch, Route} from  'react-router-dom';
import Blog from './Blog/Blog'
class App extends Component {

 
  render() {

    return (
      <Switch>
        <Route path={"/"} exact component={Fullpage}/>
        <Route path={"/blog"} exact component={Blog}/>
      </Switch>


    );
  }
}


export default App;