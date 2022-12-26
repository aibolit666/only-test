import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Pagination, Navigation } from 'swiper';
import './style.scss';

const Items = () => {
  let degreesToRotate: number;
  let wayToRotateOperand: string;
  let itemRotateOperand: string;

  const rotateItem = (e: MouseEvent) => {
    if (e.clientX > 1200 && e.clientY > 600) {
      console.log('right bottom');
      degreesToRotate = 90;
      wayToRotateOperand = '-=';
      itemRotateOperand = '+=';
    } else if (e.clientX < 900 && e.clientY > 600) {
      console.log('left bottom');
      degreesToRotate = 180;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    } else if (e.clientX < 900 && e.clientY < 350) {
      console.log('left top');
      degreesToRotate = 90;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    } else if (e.clientX < 1250 && e.clientY < 350) {
      console.log('right top');
      degreesToRotate = 0;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    }

    const tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    tl.to(
      '.swiper-pagination',
      { duration: 1, rotation: wayToRotateOperand + degreesToRotate },
      'spin'
    );
    tl.to(
      '.swiper-pagination-bullet-active',
      {
        duration: 0,
        rotation: itemRotateOperand + degreesToRotate,
      },
      'spin'
    );
  };

  const slideChange = (slideNumber: number) => {
    const allItems = Array.from(document.querySelectorAll('.item'));
    const actualItem = allItems.filter((x) => x.id === String(slideNumber + 1));
    const swipedItem = actualItem[0];
    console.log(swipedItem);
    // setClickedItem(swipedItem);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.swiper-pagination-bullet');
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).onclick = function (e) {
        console.log(e.clientX, e.clientY);
        rotateItem(e);
      };
    }
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <div className="swiper-wrapp">
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={80}
          navigation={true}
          pagination={pagination}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => slideChange(swiper.realIndex)}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-title">2015</div>
            <div className="swiper-content">
              13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-title">2016</div>
            <div className="swiper-content">
              Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую
              обозначение GN-z11
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-title">2017</div>
            <div className="swiper-content">
              Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-title">2015</div>
            <div className="swiper-content">
              13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Items;
