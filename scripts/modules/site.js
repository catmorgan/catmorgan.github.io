import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import About from './about';

export default class Site extends React.Component{

  render(){
    return (
      <div>
        <Header/>
        <About/>
      </div>
    );
  }
}