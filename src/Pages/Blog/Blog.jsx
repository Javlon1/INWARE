import * as React from 'react'
import Item from '../../Components/Page/Blog/Item/Item'
import AllIntro from '../../Components/Ui/AllIntro/AllIntro'
import './Blog.scss'

export default function Blog() {

    return (
        <section className='blogS'>
            <AllIntro text={'Our Blog'} title={'Blog'} />
            <Item />
        </section>
    )
}
