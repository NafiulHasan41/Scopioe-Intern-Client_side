
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TherapistCard from '../../Components/Card/TherapistCard';

 function Featured_Therapist() {


    const [therapist, setTherapist] = useState([]);

    useEffect(() => {
        async function getCities() {
            const therapi = await axios.get("https://nafiulhasan41.github.io/Student-Housing-json/featured.json");
            setTherapist(therapi.data);
        }

        getCities();
    }, []);
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#296BCA',
          '--swiper-pagination-color': '#296BCA',
        }}
        slidesPerView={4} 
        spaceBetween={2}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      > {

         therapist.map((therapist, index) => (

            <SwiperSlide key={index}>
              <TherapistCard therapist={therapist} />
            </SwiperSlide>
            
         ))

      }
       
       
      </Swiper>
    </>
  );
}

export default Featured_Therapist;
