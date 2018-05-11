import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component{

  render(){
    return (
      <section className="site-header">
        <div className="header-menu">
          <div className="site-name">Cat Morgan</div>
          <div className="icon-container">
            <a className="fab fa-twitter" href="https://twitter.com/cyaaato" target="__blank"/>
            <a className="fab fa-github" href="https://github.com/catmorgan" target="__blank"/>
            <a className="fab fa-linkedin" href="https://www.linkedin.com/in/cyaato/" target="__blank"/>
            <a className="fas fa-envelope" href="mailto:morgcat11@gmail.com"/>
          </div>
        </div>
        <div className="header-content">
          <h1>Hey, I'm Cat</h1>
          <h2>I'm a software engineer.</h2>
        </div>
      </section>
    );
  }
}