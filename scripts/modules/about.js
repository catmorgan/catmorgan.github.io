import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component{

  render(){
    return (
      <section className="about light-text">
        <div className="wrapper">
          <h1><span>About</span></h1>
          <div className="about-content">
            <img className="about-picture" src="./assets/images/headshot.jpg"/>
            <p className="about-desc light-text">
              I currently work as a Software Engineer on Hearthstone at Blizzard Entertainment.
              <br/><br/>
              I like gameplay, artificial intelligence, web development, mobile development, and AR/VR.
              <br/><br/> 
              I am an avid programmer, dungeon delver, and gamer. I enjoy attempting to garden and bake, with
              some relative success.
            </p>
          </div>
        </div>
      </section>
    );
  }
}