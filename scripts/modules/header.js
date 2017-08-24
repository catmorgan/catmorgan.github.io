import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{

  render(){
    return (
      <section className="site-header">
        <div className="header-menu">
          <a className="fa fa-github" aria-hidden="true" href="https://github.com/catmorgan"/>
        </div>
        <div className="header-content">
          <h1>Hey, I'm Cat</h1>
          <h2>I'm a software engineer.</h2>
        </div>
      </section>
    );
  }
}