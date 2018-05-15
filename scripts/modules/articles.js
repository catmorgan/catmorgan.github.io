import React from 'react';
import ReactDOM from 'react-dom';

export default class Articles extends React.Component{

  render(){
    return (
      <section className="articles light-text">
        <div className="wrapper">
          <div className="article-content">
            <a href="https://news.blizzard.com/en-us/blizzard/21752086/blizzard-interviews-cat-morgan" target="__blank">
              <img  src="./assets/images/article-preview.png"/>
              <div className="article-info">
                <h1>Blizzard Interviews Cat Morgan</h1>
                <p>"Don’t be afraid because you will find someone who is inspired by you and you will find people to support you."</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}