import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"}></SectionTitle>
            <div className="max-w-6xl mx-auto px-4">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="category-swiper mb-12"
                >
                    {[slide1, slide2, slide3, slide4, slide5, slide5].map((img, i) => (
                        <SwiperSlide key={i} className="relative">
                            <img src={img} className="w-full" />
                            <h3 className="text-4xl uppercase text-white absolute bottom-12 left-1/2 transform -translate-x-1/2">
                                {["Salads", "Soups", "Pizzas", "Desserts", "Lettuce", "Tomatoes"][i]}
                            </h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Category;
