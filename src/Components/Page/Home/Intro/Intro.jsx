import * as React from 'react'
import { Link } from 'react-router-dom';
import './Intro.scss'
import Intr from '../../../../Assets/Img/intro.jpg'
import { Context } from '../../../../Context/Context';

export default function Intro() {
    const { lan, menu, setMenu } = React.useContext(Context)

    return (
        <section className='intro'>
            <div className='container'>
                <div className="container__left">
                    <h2 className='container__left__title'>
                        INWARE IT dasturlash korxonasi
                    </h2>
                    <p className='container__left__text'>
                        - Avtomatizatsiya orqali biznesni keyingi bosqichga olib chiqish <br />
                        - 6+ yil tajriba va 60+ loyihalar <br />
                        - Tajribali mutaxasislar, dasturchilar <br />
                        - Biznesni dastur bilan avtomatlashtirish <br />
                        - Doimiy ishonchlik hamkor <br />
                        - Doimiy texnik yordam <br />
                        - Hisob-kitob, moliya va boshqa muammolarga yechim <br />
                        - G'oyangizni to'ldiradi <br />
                        - Sizni extiyojingizni eshita biladi, tushunadi 
                    </p>
                    <Link to='/about' className='container__left__btn'
                        onClick={() => {
                            setMenu(2)
                            sessionStorage.setItem('menu', 2)
                        }}>
                        ABOUT COMPANY
                        <i className="bi bi-arrow-right-short"></i>
                    </Link>
                </div>
                <div className="container__right">
                    <img className='container__right__img' src={Intr} alt="" />
                </div>
            </div>
        </section>
    )
}