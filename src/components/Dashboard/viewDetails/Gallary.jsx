import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import sliderOne from "../../../assets/slader1.png";
import sliderTwo from "../../../assets/slider2.png";
const Gallary = () => {
  return (
    <div className="container ps-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          430: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        loop={true}
        className="mySwiper padding_left"
      >
        <SwiperSlide>
          <img src={sliderOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderOne} alt="" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Gallary;
