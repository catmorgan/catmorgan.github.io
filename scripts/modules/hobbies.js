import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel'

export default class Hobbies extends React.Component{

  render(){
    return (
      <section className="hobbies light-text">
        <div className="wrapper">
          <h1><span>Me in a nut shell</span></h1>
          <Carousel>
            <div>
              <img src ="./assets/images/berry-cake.jpg" alt="Lemon cake with vanilla butter cream frosting and berry drizzle"/>
            </div>
            <img src ="./assets/images/drumstick-holder.jpg" alt="A green macrame drum stick holder"/>
            <img src ="./assets/images/yoga.jpg" alt="Cat doing yoga - specifically 'Crow' pose"/>
            <img src ="./assets/images/plant-hangers.jpg" alt="A light green macrame plant hanger with an empty pot, and an empty grey macrame plant hanger"/>
            <img src ="./assets/images/wedding-cake.jpg" alt="A three tiered white wedding cake with fresh flowers"/>
            <img src ="./assets/images/rug.jpg" alt="A half circle macrame rug"/>
          </Carousel>
        </div>
      </section>
    );
  }
}