import * as React from 'react'
import ReactPaginate from 'react-paginate'
import './Item.scss'
import Blog from '../function'

export default function Item() {
    const [blogs, setBlogs] = React.useState([])
    const [currentPage, setCurrentPage] = React.useState(1)
    const [countriesPerPage] = React.useState(6)
    
    const [loading, setLoading] = React.useState(true)
    
    React.useEffect(() => {
        const getCounteries = async () => {
            await fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users')
                .then(resp => {
                    if (!resp.ok) throw new Error(`oшибка: ${resp.status}`)
                    return resp.json()
                })
                .then(data => setBlogs(data))
                .catch(error => console.error(error.message))
                setLoading(false)
            }
        getCounteries()
    }, [])

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = blogs.slice(firstCountryIndex, lastCountryIndex)

    const handlerPageClick = (item) => {

        const correntPage = (item.selected) + 1
        setCurrentPage(correntPage)

    }

    const totalBlogs = blogs.length

    return (
        <section className='item'>
            <div className='container'>

                <Blog blogs={currentCountry} loading={loading} />

                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={totalBlogs / countriesPerPage}
                    marginPagesDisplayed={2}
                    onPageChange={handlerPageClick}
                    containerClassName={'justify-content-center pagination container__list'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </section>
    )
}
