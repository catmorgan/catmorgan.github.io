import React from 'react';
//import { Carousel } from 'react-responsive-carousel'
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const imageMap = [
  {key:"./assets/images/drumstick-holder.jpg", value:"A green macrame drum stick holder"},
  {key:"./assets/images/berry-cake.jpg", value:"Lemon cake with vanilla butter cream frosting and berry drizzle"},
  {key:"./assets/images/yoga.jpg", value:"Cat doing yoga - specifically 'Crow' pose"},
  {key:"./assets/images/plant-hangers.jpg" , value:"A light green macrame plant hanger with an empty pot, and an empty grey macrame plant hanger"},
  {key:"./assets/images/wedding-cake.jpg" , value:"A three tiered white wedding cake with fresh flowers"},
  {key:"./assets/images/rug.jpg" , value:"A half circle macrame rug"},
];

const slides = [];

for (var i = 0; i < imageMap.length; i++) {
  slides.push(
    <SwiperSlide key={i} virtualIndex={i}>
      <img className="hobbies-swiper-slide" src={imageMap[i].key} alt={imageMap[i].value}/>
    </SwiperSlide>
  )
}

export default class Hobbies extends React.Component{


  render(){
    return (
      <section className="hobbies light-text">
        <div className="wrapper">
          <h1><span>Me in a nut shell</span></h1>
          <Swiper navigation pagination>
            {slides}
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