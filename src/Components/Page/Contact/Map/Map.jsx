import * as React from 'react'
import'./Map.scss'


export default function Map() {
    return (
        <section className='map'>
            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.7635593088863!2d72.32993653407752!3d40.73883206369297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced2d04e3bc25%3A0xc31d562327ae2b2b!2z0KPQu9C40YbQsCDQmtC-0YDQsNGC0YPRgiwg0JDQvdC00LjQttCw0L0sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1689254100038!5m2!1sru!2s`} width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}
 