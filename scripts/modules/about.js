import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component{

  render(){
    return (
      <section className="about">
        <h1>Profile</h1>
        <h2>I'm a software engineer.</h2>
        <div className="about-info">
          <div>
            <h1>About Me</h1>
            <p>
              I am a software engineer with experience as a full-stack web developer.
              I currently work at Blizzard Entertainment in Corporate Applications. 
              
            </p>
          </div>
          <div className="profile-picture"/>
          <div>
            <h1>Details</h1>
            <p>
              
            </p>
          </div>
        </div>
      </section>
    );
  }
}