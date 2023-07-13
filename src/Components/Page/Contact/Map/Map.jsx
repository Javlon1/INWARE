import * as React from 'react'
import'./Map.scss'


export default function Map() {
    return (
        <section className='map'>
            <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6610169292708!2d${72.359376}!3d${40.747459}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1suz!2s!4v1673713040343!5m2!1suz!2s`} width="100%" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}
 