import * as React from 'react'
import ReactPaginate from 'react-paginate'
import './Body.scss'
import TeamF from '../function'


export default function Body() {
    const [team, setTeam] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [countriesPerPage] = React.useState(8)

    React.useEffect(() => {
        const getCounteries = async () => {
            setLoading(true)
            fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/users')
                .then(resp => {
                    if (!resp.ok) throw new Error(`oшибка: ${resp.status}`)
                    return resp.json()
                })
                .then(data => setTeam(data))
                .catch(error => console.error(error.message))
            setLoading(false)

        }
        getCounteries()
    }, [])

    const lastCountryIndex = currentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = team.slice(firstCountryIndex, lastCountryIndex)

    const handlerPageClick = (item) => {

        const correntPage = (item.selected) + 1
        setCurrentPage(correntPage)

    }

    const totalTeam = team.length

    return (
        <section className='bodys'>
            <div className='container'>

                <TeamF team={currentCountry} loading={loading} />

                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={totalTeam / countriesPerPage}
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
