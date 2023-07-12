import * as React from 'react'
import './Blog.scss'
import { Blogs } from '../../../../Data/Data'
import Img from '../../../../Assets/Img/img.webp'
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Blog() {

    return (
        <section className='blog'>
            <div className='container'>
                <p className='container__title'>BLOG</p>
                <h2 className='container__text'>Our Latest Blogs</h2>

                <Swiper
                    // install Swiper modules
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        Blogs?.map((e) => (
                            <SwiperSlide key={e.id}>
                                <Link to='/blog-detail' className='container__a'>
                                    <img className='container__a__img' src={Img} alt="" />
                                    <div className='container__a__item'>
                                        <h3 className='container__a__item__sbject'>{e.subject}</h3>
                                        <span className='container__a__item__title'>
                                            <h2>{e.title}</h2>
                                        </span>
                                        <p className='container__a__item__text'>{e.text}</p>
                                    </div>
                                    <span className='container__a__link'>
                                        <p>Read More</p>
                                        <i className={`bi ${e.icon}`}></i>
                                    </span>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
