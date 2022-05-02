import React from 'react';
import Header from './header';
import About from './about';
import Career from './career';
import Skills from './skills';
import Tools from './tools';
import Articles from './articles';
import Education from './education';
import Hobbies from './hobbies';
import Footer from './footer';
import InstagramEmbed from 'react-instagram-embed';

export default class Site extends React.Component{

  render(){
    return (
      <div>
        <Header/>
        <About/>
        <Career/>
        <Articles/>
        <Skills/>
        <Tools/>
        {/* <InstagramEmbed
         url='https://instagr.am/p/BtWbPc0noG6/'
         maxWidth={980}
         hideCaption={false}
         containerTagName='section'
         className="instagram-container"
         protocol=''
         injectScript
        /> */}
        <Education/>
        <Hobbies/>
        {/* <InstagramEmbed
         url='https://instagr.am/p/BrVr5_2HJHZ/'
         maxWidth={980}
         hideCaption={false}
         containerTagName='section'
         className="instagram-container"
         protocol=''
         injectScript
        /> */}
        <Footer/>
      </div>
    );
  }
}