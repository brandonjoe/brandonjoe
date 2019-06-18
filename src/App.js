
import './App.css';
import Fullpage from './Fullpage';
import React, { Component } from 'react';
import Loading from './Loading/Loading'
import { Preloader, Placeholder } from 'react-preloading-screen';
class App extends Component {
 
  state = { isLoading: true }
 
    

componentDidMount() {
  console.log('loaded')
  this.setState({isLoading: false})
}
 
  render() {

    return (
        this.setState.isLoading === false ? <Loading /> : <Fullpage />

    );
  }
}


export default App;