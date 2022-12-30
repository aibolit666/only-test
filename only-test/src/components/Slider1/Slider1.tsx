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
      { duration: 1, rotation: wayToRotateOperand + degreesToRotate },
      'spin'
    );
    tl.to(
      '.swiper-pagination-bullet-active',
      { duration: 0, rotation: itemRotateOperand + degreesToRotate },
      'spin'
    );
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.swiper-pagination-bullet');
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).onclick = function (e) {
        rotateItem(e);
      };
    }
  }, []);

  return (
    <>
      <div className="swiper-wrapp">
        <Swiper
          slidesPerView={1}
          pagination={pagination}
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
              navigation={true}
              modules={[Navigation]}
              className="mySwiper1"
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
                <div className="swiper-title">2016</div>
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
                <div className="swiper-title">2016</div>
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
                <div className="swiper-title">2016</div>
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
                <div className="swiper-title">2016</div>
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
