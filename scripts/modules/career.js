import React from 'react';

function CareerRow(props) {
  return (
    <div className="career-row">
      <div className="career-place">
        <div className="location">{props.location}</div>
        <div className="date">{props.date}</div>
      </div>
      <div className="career-description">
        <div className="title">{props.title}</div>
        <div>
          {props.body}
        </div>
      </div>
    </div>
  )
}

export default class Career extends React.Component{

  render(){
    return (
      <section className="career dark-text">
        <div className="wrapper">
          <h1><span>Career</span></h1>
          <div className="career-content">

            <CareerRow
            location="Blizzard Entertainment | Unannounced Project"
            date="Dec 2018 - current"
            title="Software Engineer, Automation"
            body="I design and implement continous integration systems, like automerging in source control and automated testing on mobile devices.
            I also design and write unit and integration tests for tools, data, and the client. I unblock developers from local issues and help debug build and test failures.
            Most recently, I have been able to start working on integrated Unity3D Editor tools, which has been really fun and exciting to feel like a full stack developer again."
            />

            <CareerRow
            location="Blizzard Entertainment | Hearthstone"
            date="Oct 2017 - Dec 2018"
            title="Software Engineer, Automation"
            body="I maintained, debugged, and improved the build and continuous integration system.
            I also wrote and maintained unit, stress, and load tests. I primarily worked in C#, Groovy, and python."
            />

            <CareerRow
            location="Blizzard Entertainment | Corporate Applications"
            date="Feb 2017 - Oct 2017"
            title="Software Engineer"
            body=""
            />

            <CareerRow
            location="Blizzard Entertainment | Corporate Applications"
            date="June 2015 - Feb 2017"
            title="Associate Software Engineer"
            body="I built web applications and services for non-development teams such as but not limited to: finance, HR,
            marketing, and community. In addition, I created applications for general employee use to enhance
            Blizzard culture, resources, and productivity. I primarily worked in C#, ASP.NET/.NET, Javascript,
            HTML/CSS, React, and SQL."
            />

            <CareerRow
            location="Blizzard Entertainment | Battle.net"
            date="May 2014 - Aug 2014"
            title="Software Engineer Intern"
            body="My main project was to implement concurrent testing into the current testing
            framework in order to increase efficiency and reduce runtime on build
            verification tests. My final outcome was reducing the runtime from 12 hours to
            4 hours. I used C#, python, C++, and internal tools. Outside of my position, I volunteered
            numerous times for overtime in the QA Testing department, in which I debugged and reported
            bugs, and assured various mechanics and content in World of Warcraft: Warlords of Draenor."
            />

            <CareerRow
            location="Vassar College"
            date="Jan 2013 - May 2015"
            title="Computer Science Assistant and Coach"
            body="I helped students understand computer science concepts, review and debug code and answer
            student's questions in lab. I've taught Java, Racket/Scheme, and Computer Organization.
            I held regular office hours every week to be available for the other students and
            I also helped teach in-class labs."
            />

            <CareerRow
            location="Vassar College"
            date="May 2013 - Aug 2013"
            title="Undergraduate Research Summer Intern (URSI)"
            body="As part of this internship, I game designed and programmed an educational iOS
            application for ages 10 and up. I used Unity3D to create the video game which teaches
            the concepts and logic of robotic behavior, sensors and programming."
            />

          </div>
        </div>
      </section>
    );
  }
}