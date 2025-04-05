import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import DishCard from '../pages/Dish/DishCard';

// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

// import required modules

const History = () => {


  // test in frontend, before have backend api:
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch("dishes.json")
      .then(res => res.json())
      .then((data) => setDishes(data))
  }, [])


  return (
    <div className='my-20'>
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
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
