import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import SwiperCore, { Keyboard, Navigation } from "swiper";

SwiperCore.use([Keyboard, Navigation]);

export default class Hobbies extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      images : [
        {"src":"./assets/images/drumstick-holder.jpg", "alt":"A green macrame drum stick holder"},
        {"src":"./assets/images/berry-cake.jpg", "alt":"Lemon cake with vanilla butter cream frosting and berry drizzle"},
        {"src":"./assets/images/yoga.jpg", "alt":"Cat doing yoga - specifically 'Crow' pose"},
        {"src":"./assets/images/wedding-cake.jpg" , "alt":"A three tiered white wedding cake with fresh flowers"},
        {"src":"./assets/images/rug.jpg" , "alt":"A half circle macrame rug"},
        {"src":"./assets/images/lux.jpg" , "alt":"A black dog, Lux, is sitting on a beige couch, staring at the camera"},
      ]
    }
  }

  render(){
    return (
      <section className="hobbies dark-text">
        <div className="wrapper">
          <h1><span>Me in a nut shell</span></h1>
          <Swiper
            className="hobbies-container"
            slidesPerView={2}
            loop
            navigation
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {this.state.images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="slide-container">
                    <img src={image.src} alt={image.alt}/>
                    <div className="slide-description">{image.alt}</div>
                  </div>
                </SwiperSlide>
              )})
            }
          </Swiper>
        </div>
      </section>
    );
  }
}