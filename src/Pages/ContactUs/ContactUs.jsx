import * as React from 'react'
import Map from '../../Components/Page/Contact/Map/Map'
import Contact from '../../Components/Page/Home/Contact/Contact'
import AllIntro from '../../Components/Ui/AllIntro/AllIntro'
import './ContactUs.scss'


export default function ContactUs() {
    return (
        <section className='contactUs'>
            <AllIntro text={'Contact Us'} title={'Contact'} />
            <Contact />
            <Map />
        </section>
    )
}
