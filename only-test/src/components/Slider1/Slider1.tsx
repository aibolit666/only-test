import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
