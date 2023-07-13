import * as React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../Ui/Loader/Loader'
import Img from '../../../Assets/Img/img.webp'
import './function.scss'

export default function TeamF({ team, loading }) {

    if (loading) {
        return <Loader />
    }

    return (
        <section className='teamf'>
            {
                team?.map((e) => (
                    <Link key={e.id} to='/team-detail'>
                        <div className='teamf__item'>
                            <img className='teamf__item__img' src={Img} alt="" />
                            <ul className='teamf__item__list'>
                                {
                                    e.social?.map((i) => (
                                        <a href={i.link} target="_blank" className='teamf__item__list__item' key={i.id}>
                                            <i className='bi bi-instagram'></i>
                                        </a>
                                    ))
                                }
                            </ul>
                            <main className='teamf__item__main'>
                                <h2 className='teamf__item__main__name'>
                                    <p>
                                        {e.name}
                                    </p>
                                </h2>
                                <p className='teamf__item__main__position'>{e.tel}</p>
                            </main>
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}