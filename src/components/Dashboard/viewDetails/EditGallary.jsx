import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import sliderOne from "../../../assets/slader1.png";
import sliderTwo from "../../../assets/slider2.png";
const EditGallary = () => {
  return (
    <div className="ps-0 container experience_wrapper  mb-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          430: {
            slidesPerView: 3,
            spaceBetween: 12,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
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
        <SwiperSlide>
          <img src={sliderOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderOne} alt="" />
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

export default EditGallary;
