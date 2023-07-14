import * as React from 'react'
import AllIntro from '../../../Components/Ui/AllIntro/AllIntro'
import './TeamDetails.scss'
import Img from '../../../Assets/Img/img.webp'


export default function TeamDetails() {
    const formReg = (e) => {
        e.preventDefault()
        
        console.log('ok');
    }
    return (
        <section className='teamDetails'>
            <AllIntro text={'Team Details'} title={'Team Details'} />
            <div className='container'>
                <div className="container__left">
                    <img src={Img} alt="" />
                    <div className='container__left__div'>
                        <ul className="container__left__div__list">
                            <li className="container__left__div__list__item">
                                <a href="">
                                    <i className='bi bi-instagram'></i>
                                </a>
                            </li>
                        </ul>
                        <div className='container__left__div__info'>
                            <h3>Contact info</h3>
                            <ul>
                                <li>
                                    <i className='bi bi-telephone-fill'></i>
                                    <a href="">+998905251243</a>
                                </li>
                            </ul>
                        </div>
                        <div className='container__left__div__hours'>
                            <h3>Working hours</h3>
                            <div className='container__left__div__hours__left'>
                                <ul>
                                    <li>Monday</li>
                                </ul>
                            </div>
                            <div className='container__left__div__hours__right'>
                                <ul>
                                    <li>9:00 am - 8:00 pm </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container__right">
                    <div className="container__right__name">
                        <h2>Javlon</h2>
                        <span>Lorem ipsum dolor sit amet </span>
                    </div>
                    <div className="container__right__bio">
                        <h3>Biography</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi accusamus tempore saepe fugit exercitationem tenetur, soluta maiores eum laboriosam, molestiae laudantium distinctio quam quasi doloribus. Iure laudantium repudiandae dolore consequuntur.</p>
                    </div>
                    <div className="container__right__edu">
                        <h3>Education</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi accusamus tempore saepe fugit exercitationem tenetur, soluta maiores eum laboriosam, molestiae laudantium distinctio quam quasi doloribus. Iure laudantium repudiandae dolore consequuntur.</p>
                    </div>

                </div>

                <form onSubmit={formReg} className='container__form' action="#" >
                    <h2>Get Appointment</h2>
                    <input className='container__form__inp' type="text" name='name' placeholder='Your Full Name' required />
                    <input className='container__form__inp' type="email" name='email' placeholder='Your Email' required />
                    <input className='container__form__inp' type="number" name='phone' placeholder='Your Phone' required />
                    <input className='container__form__inp' type="text" name='subject' placeholder='Subject' required />
                    <textarea className='container__form__inp1' type="text" name='description' placeholder='Case Description' required />
                    <button className='container__form__btn' type='submit'>Submit</button>
                </form>

            </div>
        </section>
    )
}
