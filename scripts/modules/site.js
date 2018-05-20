import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import About from './about';
import Career from './career';
import Skills from './skills';
import Tools from './tools';
import Articles from './articles';
import Education from './education';
import Footer from './footer';

export default class Site extends React.Component{

  render(){
    return (
      <div>
        <Header/>
        <About/>
        <Career/>
        <Skills/>
        <Tools/>
        <Articles/>
        <Education/>
        {/* <Hobbies/> */}
        <Footer/>
      </div>
    );
  }
}