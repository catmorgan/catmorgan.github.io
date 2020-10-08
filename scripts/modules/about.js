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
              I currently work as a Software Engineer on an Unannounced Project at Blizzard Entertainment.
              <br/><br/>
              Technology is so cool! I like tools, UI, gameplay, artificial intelligence, web development, mobile development, and AR/VR.
              <br/><br/> 
              I am an avid programmer and gamer. I also enjoy baking, gardening, yoga, and macrame. I'm currently working on a RaspberryPi automated gardening system.
              <br/><br/>
              A passion of mine is being a resource to young girls, women, and students to help them navigate to their goals and dreams through sharing my experiences.
              Let's get more diversity, inclusion, and equality in technology together.  
            </p>
          </div>
        </div>
      </section>
    );
  }
}