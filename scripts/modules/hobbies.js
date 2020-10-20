import React from 'react';
//import { Carousel } from 'react-responsive-carousel'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default class Hobbies extends React.Component{

  render(){
    return (
      <section className="hobbies light-text">
        <div className="wrapper">
          <h1><span>Me in a nut shell</span></h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div>
                <img src ="./assets/images/berry-cake.jpg" alt="Lemon cake with vanilla butter cream frosting and berry drizzle"/>
              </div>
            </SwiperSlide>
            <SwiperSlide><img src ="./assets/images/drumstick-holder.jpg" alt="A green macrame drum stick holder"/></SwiperSlide>
            <SwiperSlide><img src ="./assets/images/yoga.jpg" alt="Cat doing yoga - specifically 'Crow' pose"/></SwiperSlide>
            <SwiperSlide><img src ="./assets/images/plant-hangers.jpg" alt="A light green macrame plant hanger with an empty pot, and an empty grey macrame plant hanger"/></SwiperSlide>
            <SwiperSlide><img src ="./assets/images/wedding-cake.jpg" alt="A three tiered white wedding cake with fresh flowers"/></SwiperSlide>
            <SwiperSlide><img src ="./assets/images/rug.jpg" alt="A half circle macrame rug"/></SwiperSlide>
          </Swiper>
          {/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
              <img src ="./assets/images/berry-cake.jpg" alt="Lemon cake with vanilla butter cream frosting and berry drizzle"/>
            </div>
            <img src ="./assets/images/drumstick-holder.jpg" alt="A green macrame drum stick holder"/>
            <img src ="./assets/images/yoga.jpg" alt="Cat doing yoga - specifically 'Crow' pose"/>
            <img src ="./assets/images/plant-hangers.jpg" alt="A light green macrame plant hanger with an empty pot, and an empty grey macrame plant hanger"/>
            <img src ="./assets/images/wedding-cake.jpg" alt="A three tiered white wedding cake with fresh flowers"/>
            <img src ="./assets/images/rug.jpg" alt="A half circle macrame rug"/>
          </Carousel> */}
        </div>
      </section>
    );
  }
}