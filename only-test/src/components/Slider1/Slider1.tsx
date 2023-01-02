import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import gsap from 'gsap';

import { Pagination, Navigation } from 'swiper';
import './style.scss';

const Slider1 = () => {
  const [currentStartYear, setCurrentStartYear] = useState(0);
  const [currentEndYear, setCurrentEndYear] = useState(0);

  let degreesToRotate: number;
  let wayToRotateOperand: string;
  let itemRotateOperand: string;

  const rotateItem = (e: MouseEvent) => {
    if (e.pageX > 1200 && e.pageY > 600) {
      degreesToRotate = 90;
      wayToRotateOperand = '-=';
      itemRotateOperand = '+=';
    } else if (e.pageX < 900 && e.pageY > 600) {
      degreesToRotate = 180;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    } else if (e.pageX < 900 && e.pageY < 400) {
      degreesToRotate = 90;
      wayToRotateOperand = '+=';
      itemRotateOperand = '-=';
    } else if (e.pageX > 1200 && e.pageY < 400) {
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
  }, []);

  const changeYears = (startYear: number, endYear: number) => {
    setCurrentStartYear(startYear);
    setCurrentEndYear(endYear);
  };

  return (
    <>
      <div className="years-wrapper">
        <div className="year-start">{currentStartYear}</div>
        <div className="year-end">{currentEndYear}</div>
      </div>
      <div className="swiper-wrapp">
        <Swiper
          slidesPerView={1}
          pagination={pagination}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          onSwiper={(e) => {
            const slides = e.slides;
            const activeSlideIndex = e.activeIndex;
            const currentStartYear =
              slides[activeSlideIndex].firstChild.firstChild.firstChild.firstChild.textContent;
            const currentEndYear =
              slides[activeSlideIndex].firstChild.firstChild.lastChild.firstChild.textContent;
            setCurrentStartYear(Number(currentStartYear));
            setCurrentEndYear(Number(currentEndYear));
          }}
          onSlideChange={(e) => {
            const slides = e.slides;
            const activeSlideIndex = e.activeIndex;
            const startYear =
              slides[activeSlideIndex].firstChild.firstChild.firstChild.firstChild.textContent;
            const endYear =
              slides[activeSlideIndex].firstChild.firstChild.lastChild.firstChild.textContent;
            changeYears(Number(startYear), Number(endYear));
          }}
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
