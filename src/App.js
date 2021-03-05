import React, { Component } from 'react'
import './App.css';
import Header from './component/Header';
import Quiz from './component/Quiz';

 class App extends Component {



  render() {
    return (
      <div>
        <Header />
        <Quiz />
      </div>
    )
  }
}


export default App
