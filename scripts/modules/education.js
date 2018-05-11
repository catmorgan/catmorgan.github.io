import React from 'react';
import ReactDOM from 'react-dom';

export default class Education extends React.Component{

  render(){
    return (
      <section className="education">
        <div className="wrapper">
          <h1>Education</h1>
          <div>
            <div className="college">Vassar College</div>
            <div>
              <span className="college-details">Bachelor of Arts, Computer Science</span>
              <span className="college-details right">Class of 2015</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}