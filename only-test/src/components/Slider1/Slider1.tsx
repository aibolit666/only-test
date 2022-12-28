import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';
import './style.scss';

const Slider1 = () => {
  return (
    <>
      <div className="swiper-wrapp">
        <Swiper
          slidesPerView={1}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={80}
              pagination={{
                clickable: true,
              }}
              className="mySwiper1"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={80}
              pagination={{
                clickable: true,
              }}
              className="mySwiper2"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={80}
              pagination={{
                clickable: true,
              }}
              className="mySwiper3"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={80}
              pagination={{
                clickable: true,
              }}
              className="mySwiper4"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider1;
