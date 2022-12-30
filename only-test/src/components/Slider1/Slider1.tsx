import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import gsap from 'gsap';

import { Pagination, Navigation } from 'swiper';
import './style.scss';

const Slider1 = () => {
  let degreesToRotate: number;
  let wayToRotateOperand: string;
  let itemRotateOperand: string;

  const rotateItem = (e: MouseEvent) => {
    if (e.pageX > 1200 && e.pageY > 600) {
      console.log('right bottom');
      degreesToRotate = 90;
      wayToRotateOperand = '-=';
      itemRotateOperand = '+=';
    } else if (e.pageX < 900 && e.pageY > 600) {
      console.log('left bottom');
      degreesToRotate = 180;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    } else if (e.pageX < 900 && e.pageY < 400) {
      console.log('left top');
      degreesToRotate = 90;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    } else if (e.pageX > 1200 && e.pageY < 400) {
      console.log('right top');
      degreesToRotate = 0;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    }
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    tl.to(
      '.swiper-pagination',
      {
        duration: 1,
        rotation: wayToRotateOperand + degreesToRotate,
      },
      'spin'
    );
    tl.to(
      '.swiper-pagination-bullet',
      {
        duration: 1,
        rotation: itemRotateOperand + degreesToRotate,
      },
      'spin'
    );
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      console.log(className);
      return (
        '<span id="span' + (index + 1) + '" class="' + className + '">' + (index + 1) + '</span>'
      );
    },
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.swiper-pagination-bullet');
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).onclick = function (e) {
        rotateItem(e);
      };
    }

    const next = document.querySelector('.swiper-button-next');
    (next as HTMLButtonElement).onclick = function () {
      console.log('e');
    };
  }, []);

  const rot = (e: number) => {
    console.log(e);
  };

  return (
    <>
      <div className="swiper-wrapp">
        <Swiper
          slidesPerView={1}
          pagination={pagination}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(e) => rot(e.realIndex)}
        >
          <SwiperSlide>
            <Swiper
              slidesPerView={'auto'}
              centeredSlides={true}
              spaceBetween={80}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper1"
            >
              <SwiperSlide>
                <div className="swiper-title">2007</div>
                <div className="swiper-content">
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части
                  Антарктиды
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2008</div>
                <div className="swiper-content">
                  Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик,
                  получившую обозначение GN-z11
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2009</div>
                <div className="swiper-content">
                  Компания Tesla официально представила первый в мире электрический грузовик Tesla
                  Semi
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2010</div>
                <div className="swiper-content">
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части
                  Антарктиды
                </div>
              </SwiperSlide>
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
              <SwiperSlide>
                <div className="swiper-title">2011</div>
                <div className="swiper-content">
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части
                  Антарктиды
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2012</div>
                <div className="swiper-content">
                  Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик,
                  получившую обозначение GN-z11
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2013</div>
                <div className="swiper-content">
                  Компания Tesla официально представила первый в мире электрический грузовик Tesla
                  Semi
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2014</div>
                <div className="swiper-content">
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части
                  Антарктиды
                </div>
              </SwiperSlide>
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
              <SwiperSlide>
                <div className="swiper-title">2015</div>
                <div className="swiper-content">
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части
                  Антарктиды
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2016</div>
                <div className="swiper-content">
                  Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик,
                  получившую обозначение GN-z11
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2017</div>
                <div className="swiper-content">
                  Компания Tesla официально представила первый в мире электрический грузовик Tesla
                  Semi
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2018</div>
                <div className="swiper-content">
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части
                  Антарктиды
                </div>
              </SwiperSlide>
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
              <SwiperSlide>
                <div className="swiper-title">2019</div>
                <div className="swiper-content">
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части
                  Антарктиды
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2020</div>
                <div className="swiper-content">
                  Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик,
                  получившую обозначение GN-z11
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2021</div>
                <div className="swiper-content">
                  Компания Tesla официально представила первый в мире электрический грузовик Tesla
                  Semi
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-title">2022</div>
                <div className="swiper-content">
                  13 сентября — частное солнечное затмение, видимое в Южной Африке и части
                  Антарктиды
                </div>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider1;
