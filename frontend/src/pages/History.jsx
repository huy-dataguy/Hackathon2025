import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import DishCard from '../pages/Dish/DishCard';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const History = () => {


  // test in frontend, before have backend api:
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("dishes.json")
      .then(res => res.json())
      .then((data) => setDishes(data))
  }, [])


  return (
    <div>
      <>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        >
        {
          dishes.length > 0 && dishes.map((dish, index) => (
            <SwiperSlide key={index}>
              <DishCard dish={dish} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>


    </div>
  )
}

export default History
