import * as React from 'react'
import AllIntro from '../../../Components/Ui/AllIntro/AllIntro'
import './TeamDetails.scss'


export default function TeamDetails() {
    return (
        <section className='teamDetails'>
            <AllIntro text={'Team Details'} title={'Team Details'} />
            <div className='container'>
                <div className="container__left">
                    <img src="" alt="" />
                    <ul className="container__left__list">
                        <li className="container__left__list__item">
                            <a href="">
                                <i></i>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <h3>Contact info</h3>
                        <ul>
                            <li>
                                <i className='bi bi-telephone'></i>
                                <a href="">+998905251243</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Working hours</h3>
                        <div>
                            <ul>
                                <li>Monday</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>9:00 am - 8:00 pm </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container__right">

                </div>
            </div>
        </section>
    )
}
