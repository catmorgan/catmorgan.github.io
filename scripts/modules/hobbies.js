import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Pagination, Navigation  } from "swiper";

export default class Hobbies extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      images : [
        {"src":"./assets/images/drumstick-holder.jpg", "alt":"A green macrame drum stick holder"},
        {"src":"./assets/images/berry-cake.jpg", "alt":"Lemon cake with vanilla butter cream frosting and berry drizzle"},
        {"src":"./assets/images/yoga.jpg", "alt":"Cat doing yoga - specifically 'Crow' pose"},
        {"src":"./assets/images/plant-hangers.jpg" , "alt":"A light green macrame plant hanger with an empty pot, and an empty grey macrame plant hanger"},
        {"src":"./assets/images/wedding-cake.jpg" , "alt":"A three tiered white wedding cake with fresh flowers"},
        {"src":"./assets/images/rug.jpg" , "alt":"A half circle macrame rug"},
      ]
    }
  }

  render(){
    return (
      <section className="hobbies light-text">
        <div className="wrapper">
          <h1><span>Me in a nut shell</span></h1>
          <Swiper className="swiper-container"
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
          >
            {this.state.images.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={image.src} alt={image.alt} height="500"/>
                </SwiperSlide>
              )})
            }
          </Swiper>
        </div>
      </section>
    );
  }
}