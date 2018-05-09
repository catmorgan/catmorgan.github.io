import React from 'react';
import ReactDOM from 'react-dom';

export default class Career extends React.Component{

  render(){
    return (
      <section className="career">
        <div className="wrapper">
          <h1>Career</h1>
          <div className="career-content">
            <div className="career-row">
              <div className="career-place">
                <div className="location">Blizzard Entertaiment | Hearthstone</div>
                <div className="date">October 2018 - current</div>
              </div>
              <div className="career-description">
                <div className="title">Software Engineer, Automation</div>
                <div>
                  I maintain, debug, and improve our build and continuous integration system. 
                  I also write and maintain unit, stress, and load tests. I primarily work in C# and python.
                </div>
              </div>
            </div>

            <div className="career-row">
              <div className="career-place">
                <div className="location">Blizzard Entertaiment | Corporate Applications</div>
                <div className="date">February 2017 - October 2018</div>
              </div>
              <div className="career-description">
                <div className="title">Software Engineer</div>
              </div>
            </div>

            <div className="career-row">
              <div className="career-place">
                <div className="location">Blizzard Entertaiment | Corporate Applications</div>
                <div className="date">June 2015 - February 2017</div>
              </div>
              <div className="career-description">
                <div className="title">Associate Software Engineer</div>
                <div>
                  I built web applications and services for non-development teams such as but not limited to: finance, HR, 
                  marketing, and community. In addition, I created applications for general employee use to enhance 
                  Blizzard culture, resources, and productivity. I primarily worked in C#, ASP.NET/.NET, Javascript, 
                  HTML/CSS, React, and SQL.
                </div>
              </div>
            </div>        

            <div className="career-row">
              <div className="career-place">
                <div className="location">Blizzard Entertaiment | Battle.net Game Services</div>
                <div className="date">May 2014 - August 2014</div>
              </div>
              <div className="career-description">
                <div className="title">Software Engineer Intern</div>
                <div>
                  My main project was to implement concurrent testing into the current testing 
                  framework in order to increase efficiency and reduce runtime on build 
                  verification tests. My final outcome was reducing the runtime from 12 hours to 
                  4 hours. I used C#, python, C++, and internal tools. Outside of my position, I volunteered 
                  numerous times for overtime in the QA Testing department, in which I debugged and reported 
                  bugs, and assured various mechanics and content in World of Warcraft: Warlords of Draenor.
                </div>
              </div>
            </div>

            <div className="career-row">
              <div className="career-place">
                <div className="location">Vassar College</div>
                <div className="date">January 2013 - May 2015</div>
              </div>
              <div className="career-description">
                <div className="title">Computer Science Assistant and Coach</div>
                <div>
                I helped students understand computer science concepts, review and debug code and answer 
                student's questions in lab. I've taught Java, Racket/Scheme, and Computer Organization. 
                I held regular office hours every week to be available for the other students and 
                I also helped teach in-class labs.
                </div>
              </div>
            </div>

            <div className="career-row">
              <div className="career-place">
                <div className="location">Vassar College</div>
                <div className="date">May 2013 - August 2013</div>
              </div>
              <div className="career-description">
                <div className="title">Undergraduate Research Summer Intern (URSI)</div>
                <div>
                  As part of this internship, I game designed and programmed an educational iOS 
                  application for ages 10 and up. I used Unity3D to create the video game which teaches 
                  the concepts and logic of robotic behavior, sensors and programming.
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}