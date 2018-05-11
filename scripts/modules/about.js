import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component{

  render(){
    return (
      <section className="about">
        <div className="wrapper">
          <h1>About</h1>
          <div className="about-content">
            <img className="about-picture"/>
            <p className="about-desc dark-text">
              I currently work as a Software Engineer on Hearthstone at Blizzard Entertainment.
              <br/><br/>
              I like gameplay, artificial intelligence, web development, mobile development, and AR/VR.
              <br/><br/> 
              I am an avid programmer, dungeon delver, and gamer. I enjoy to attempt gardening and baking, with
              some relative success.
            </p>
          </div>
        </div>
      </section>
    );
  }
}