import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';
import { IoLocationSharp } from 'react-icons/io5';

const Testimonial_slider = () => {

return (
<>
    <Swiper pagination={true} autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }} modules={[Autoplay , Pagination]} loop={true}
        className="mySwiper h-[417px] w-[430px]  md:max-h-[429px] md:max-w-[550px]  md:w-full  md:h-[802px] md:rounded-2xl">

        <SwiperSlide>

            <div className=' space-y-5'>
                <div>
                    <div
                        className=" flex items-center gap-[15px] bg-white w-[398px] rounded-[10px]  md:w-[490px] h-[160px] ">
                        <figure className="  w-[230px]  pl-[10px] rounded-[8px]  ">
                            <img src="https://i.ibb.co/5rxhcxm/image-116.png" alt="Movie"
                                className="w-full h-[140px] rounded-[8px] " />
                        </figure>
                        <div className="">
                            <p
                                className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center ">
                                <IoLocationSharp />location</p>
                            <h2 className=" text-[#232F3C] text-[14px] font-medium">Healing Bodywork <span
                                    className=" text-[#156BCA] font-semibold">by Court</span></h2>
                            <p className=" text-[12px] md:text-[13px] font-normal text-[#5C635A] ">Cort&apos;s healing
                                bodywork
                                massage was absolutely transformative. Their intuitive touch and deep understanding
                                of...<span className=" text-[#156BCA] font-medium">Read More</span> </p>

                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className=" flex items-center gap-[15px] bg-white w-[398px] rounded-[10px]  md:w-[490px] h-[160px] ">
                        <figure className="  w-[230px]  pl-[10px] rounded-[8px]  ">
                            <img src="https://i.ibb.co/rbpQV2K/image-120.png" alt="Movie"
                                className="w-full h-[140px] rounded-[8px] " />
                        </figure>
                        <div className="">
                            <p
                                className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center ">
                                <IoLocationSharp />location</p>
                            <h2 className=" text-[#232F3C] text-[14px] font-medium">Healing Bodywork <span
                                    className=" text-[#156BCA] font-semibold">by Court</span></h2>
                            <p className=" text-[12px] md:text-[13px] font-normal text-[#5C635A] ">Cort&apos;s healing
                                bodywork
                                massage was absolutely transformative. Their intuitive touch and deep understanding
                                of...<span className=" text-[#156BCA] font-medium">Read More</span> </p>

                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className=' space-y-5'>
                <div>
                    <div
                        className=" flex items-center gap-[15px] bg-white w-[398px] rounded-[10px]  md:w-[490px] h-[160px] ">
                        <figure className="  w-[230px]  pl-[10px] rounded-[8px]  ">
                            <img src="https://i.ibb.co/5rxhcxm/image-116.png" alt="Movie"
                                className="w-full h-[140px] rounded-[8px] " />
                        </figure>
                        <div className="">
                            <p
                                className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center ">
                                <IoLocationSharp />location</p>
                            <h2 className=" text-[#232F3C] text-[14px] font-medium">Healing Bodywork <span
                                    className=" text-[#156BCA] font-semibold">by Court</span></h2>
                            <p className=" text-[12px] md:text-[13px] font-normal text-[#5C635A] ">Cort&apos;s healing
                                bodywork
                                massage was absolutely transformative. Their intuitive touch and deep understanding
                                of...<span className=" text-[#156BCA] font-medium">Read More</span> </p>

                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className=" flex items-center gap-[15px] bg-white w-[398px] rounded-[10px]  md:w-[490px] h-[160px] ">
                        <figure className="  w-[230px]  pl-[10px] rounded-[8px]  ">
                            <img src="https://i.ibb.co/rbpQV2K/image-120.png" alt="Movie"
                                className="w-full h-[140px] rounded-[8px] " />
                        </figure>
                        <div className="">
                            <p
                                className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center ">
                                <IoLocationSharp />location</p>
                            <h2 className=" text-[#232F3C] text-[14px] font-medium">Healing Bodywork <span
                                    className=" text-[#156BCA] font-semibold">by Court</span></h2>
                            <p className=" text-[12px] md:text-[13px] font-normal text-[#5C635A] ">Cort&apos;s healing
                                bodywork
                                massage was absolutely transformative. Their intuitive touch and deep understanding
                                of...<span className=" text-[#156BCA] font-medium">Read More</span> </p>

                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>

            <div className=' space-y-5'>
                <div>
                    <div
                        className=" flex items-center gap-[15px] bg-white w-[398px] rounded-[10px]  md:w-[490px] h-[160px] ">
                        <figure className="  w-[230px]  pl-[10px] rounded-[8px]  ">
                            <img src="https://i.ibb.co/5rxhcxm/image-116.png" alt="Movie"
                                className="w-full h-[140px] rounded-[8px] " />
                        </figure>
                        <div className="">
                            <p
                                className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center ">
                                <IoLocationSharp />location</p>
                            <h2 className=" text-[#232F3C] text-[14px] font-medium">Healing Bodywork <span
                                    className=" text-[#156BCA] font-semibold">by Court</span></h2>
                            <p className=" text-[12px] md:text-[13px] font-normal text-[#5C635A] ">Cort&apos;s healing
                                bodywork
                                massage was absolutely transformative. Their intuitive touch and deep understanding
                                of...<span className=" text-[#156BCA] font-medium">Read More</span> </p>

                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className=" flex items-center gap-[15px] bg-white w-[398px] rounded-[10px]  md:w-[490px] h-[160px] ">
                        <figure className="  w-[230px]  pl-[10px] rounded-[8px]  ">
                            <img src="https://i.ibb.co/rbpQV2K/image-120.png" alt="Movie"
                                className="w-full h-[140px] rounded-[8px] " />
                        </figure>
                        <div className="">
                            <p
                                className=" text-[10px] md:text-[13px] font-normal font-[#5C635A] flex gap-[5px] items-center ">
                                <IoLocationSharp />location</p>
                            <h2 className=" text-[#232F3C] text-[14px] font-medium">Healing Bodywork <span
                                    className=" text-[#156BCA] font-semibold">by Court</span></h2>
                            <p className=" text-[12px] md:text-[13px] font-normal text-[#5C635A] ">Cort&apos;s healing
                                bodywork
                                massage was absolutely transformative. Their intuitive touch and deep understanding
                                of...<span className=" text-[#156BCA] font-medium">Read More</span> </p>

                        </div>
                    </div>
                </div>
            </div>

        </SwiperSlide>
     

    </Swiper>
</>
);
};

export default Testimonial_slider;