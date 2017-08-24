import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component{

  render(){
    return (
      <section className="skills">
        <h1>Skills</h1>
        <div className="skills-info">
          <div className="skill-container">
            <span className="lang"> C# </span>
            <span className="star-container">
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
            </span>
          </div>
          <div className="skill-container">
            <span className="lang"> Javascript </span>
            <span className="star-container">
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
            </span>
          </div>
          <div className="skill-container">
            <span className="lang"> HTML/CSS </span>
            <span className="star-container">
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
            </span>
          </div>
          <div className="skill-container">
            <span className="lang"> SQL </span>
            <span className="star-container">
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star-half" aria-hidden="true"/>
            </span>
          </div>
          <div className="skill-container">
            <span className="lang"> Java </span>
            <span className="star-container">
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
            </span>
          </div>
          <div className="skill-container">
            <span className="lang"> C++ </span>
            <span className="star-container">
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
            </span>
          </div>
          <div className="skill-container">
            <span className="lang"> Racket/Scheme </span>
            <span className="star-container">
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
            </span>
          </div>
          <div className="skill-container">
            <span className="lang"> Lisp </span>
            <span className="star-container">
              <i className="fa fa-star" aria-hidden="true"/>
              <i className="fa fa-star" aria-hidden="true"/>
            </span>
          </div>
        </div>
      </section>
    );
  }
}