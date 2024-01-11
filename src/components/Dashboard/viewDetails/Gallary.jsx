import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import sliderOne from "../../../assets/slader1.png";
import sliderTwo from "../../../assets/slider2.png";
const Gallary = ({ gallary }) => {
  return (
    <div className="container ps-lg-4  mb-5" style={{ paddingLeft: "24px" }}>
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
        {gallary &&
          gallary.length > 0 &&
          gallary?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={`${
                  process.env.NODE_ENV !== "production"
                    ? import.meta.env.VITE_LOCAL_API_URL
                    : import.meta.env.VITE_LIVE_API_URL
                }/api/v1/uploads/${item}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Gallary;
