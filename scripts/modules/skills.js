
import React from 'react';
import ReactDOM from 'react-dom';

export default class Skills extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      languages : [
        { "language": "C#",
          "expertise": 4
        },
        {
          "language" : "HTML/CSS",
          "expertise": 4
        },
        {
          "language" : "SASS",
          "expertise": 4
        },
        {
          "language":"Javascript",
          "expertise":3
        },
        {
          "language":"React",
          "expertise": 3
        },
        {
          "language" : "Python",
          "expertise" : 3
        },
        {
          "language" : "Java",
          "expertise" : 3
        },
        {
          "language" : "C++",
          "expertise" : 2
        },
        {
          "language" : "Lisp",
          "expertise" : 2
        },
        {
          "language" : "Groovy",
          "expertise" : 1
        }
      ]
    }
  }

  StarSection(numStars){
    var stars = [];
    for (var i = 0; i < numStars; i++){
      stars.push(<i className="fa fa-star" aria-hidden="true" key={i}/>);
    }

    var emptyStars = 5 - numStars;
    for (var i = 0; i < emptyStars; i++){
      stars.push(<i className="far fa-star" aria-hidden="true" key={i + 5}/>);
    }

    return (
      <span className="star-container">
        {stars}
      </span>
    )
  }

  render(){
    return (
      <section className="skills dark-text">
        <div className="wrapper">
          <h1><span>Skills</span></h1>
          <div className="skill-content">
            {this.state.languages.map((language, index) => {
                return (
                  <div className="skill-container" key={index}>
                    <span className="lang"> {language.language} </span>
                    {this.StarSection(language.expertise)}
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}