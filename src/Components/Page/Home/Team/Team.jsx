import * as React from 'react'
import './Team.scss'
import { Teams } from '../../../../Data/Data'
import Img from '../../../../Assets/Img/img.webp'
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Team() {
    return (
        <section className='team'>
            <div className='container'>
                <p className='container__title'>TEAM MEMBER</p>
                <h2 className='container__text'>Meet Our Expert Attorneys</h2>

                <Swiper
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
                >
                    {
                        Teams?.map((e) => (
                            <SwiperSlide key={e.id}>
                                <Link to='/team'>
                                    <div className='container__item'>
                                        <img className='container__item__img' src={Img} alt="" />
                                        <ul className='container__item__list'>
                                            {
                                                e.social?.map((i) => (
                                                    <a href={i.link} target="_blank" className='container__item__list__item' key={i.id}>
                                                        <i className={`bi bi-${i.icon}`}></i>
                                                    </a>
                                                ))
                                            }
                                        </ul>
                                        <main className='container__item__main'>
                                            <h2 className='container__item__main__name'>
                                                <p>
                                                    {e.fullName}
                                                </p>
                                            </h2>
                                            <p className='container__item__main__position'>{e.position}</p>
                                        </main>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
