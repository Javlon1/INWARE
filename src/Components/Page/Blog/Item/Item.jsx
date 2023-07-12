import * as React from 'react'
import ReactPaginate from 'react-paginate'
import './Item.scss'



export default function Item() {

    const [items, setItems] = React.useState([])

    const handlerPageClick = (item) => {

        const correntPage = (item.selected) + 1;

    }

    return (
        <section className='item'>
            <div className='container'>
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={25}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handlerPageClick}
                    containerClassName={'pagination justify-content-center'}
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
