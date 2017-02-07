import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{

  render(){
    return (
      <section className="site-header">
        <div className="header-bg"/>
        <h1>Hey, I'm Cat</h1>
      </section>
    );
  }
}