import * as React from 'react'
import Body from '../../Components/Page/Team/Body/Body'
import AllIntro from '../../Components/Ui/AllIntro/AllIntro'
import './OurTeam.scss'


export default function OurTeam() {
    return (
        <section className='ourTeam'>
            <AllIntro text={'Our Team'} title={'Team'} />
            <Body />
        </section>
    )
}
