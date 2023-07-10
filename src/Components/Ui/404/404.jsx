import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import './404.scss'


const NotFound = () => {
    const { lan, menu, setMenu } = React.useContext(Context)

    return (
        <section className='notFound'>
            <div className='container'>
                <div className="container__item">
                    <h1>404!</h1>
                    <p>Sorry! The Page Not Found</p>
                    <span>Oops! The page you are looking for does not exit. it might been moved or deleted.</span>
                    <Link to="/"
                        onClick={() => {
                            setMenu(1)
                            localStorage.setItem('menu', 1)
                        }}>
                        Return to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound;