import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

const Auth_slider = () => {
    return (
        <>
      <Swiper
       pagination={true}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        modules={[Autoplay , Pagination]}
        loop={true}
        className="mySwiper max-h-[802px] max-w-[648px]  h-[802px] rounded-2xl">
        <SwiperSlide ><img src="https://i.ibb.co/chCQbS0/Group-1000001745.png" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="https://i.ibb.co/chCQbS0/Group-1000001745.png" alt="" /></SwiperSlide>
        <SwiperSlide ><img src="https://i.ibb.co/chCQbS0/Group-1000001745.png" alt="" /></SwiperSlide>
        
      </Swiper>
    </>
    );
};

export default Auth_slider;