import * as React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../Ui/Loader/Loader'
import Img from '../../../Assets/Img/img.webp'
import './function.scss'

export default function Blog({ blogs, loading }) {

    if (loading) {
        return <Loader />
    } 

    return (
        <section className='blogf'>
            {
                blogs?.map((e)=>(
                    <div key={e.id} className='blogf__a'>
                        <img className='blogf__a__img' src={Img} alt="" />
                        <div className='blogf__a__item'>
                            <h3 className='blogf__a__item__sbject'>{e.name}</h3>
                            <span className='blogf__a__item__title'>
                                <h2>{e.surname}</h2>
                            </span>
                            <p className='blogf__a__item__text'>{e.address}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
