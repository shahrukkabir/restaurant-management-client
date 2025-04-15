import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className="my-20 max-w-5xl mx-auto text-center">
            <SectionTitle subHeading="---What Our Clients Say---" heading="TESTIMONIALS" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center justify-center px-4 md:px-24 py-12">
                                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly className="mb-4" />
                                <FaQuoteLeft className="text-5xl text-black my-6" />
                                <p className="text-white text-base leading-relaxed"> {review.details} </p>
                                <h3 className="mt-6 text-xl font-semibold text-orange-400 uppercase"> {review.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;
