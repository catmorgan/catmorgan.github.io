import React from 'react';
import ReactDOM from 'react-dom';

export default class Education extends React.Component{

  render(){
    return (
      <section className="education dark-text">
        <div className="wrapper">
          <h1><span>Education</span></h1>
          <div>
            <div>
              <span className="college">Vassar College</span>
              <span className="college-details right">Class of 2015</span>
            </div>
            <div className="college-details">
              <div>Bachelor of Arts, Computer Science</div>
              <div className="college-details minor">Minor in Asian Studies</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}