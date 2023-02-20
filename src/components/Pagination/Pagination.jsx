import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({info, pageNumber, setPageNumber}) => {
  return (
    <>
        <ReactPaginate 
            className='bg-gray-500 text-white flex justify-center items-center'
            pageCount={info?.pages} 
            previousLabel='Prev'
            nextLabel='Next'
            previousClassName=''
            nextClassName=''
            pageClassName=''
            pageLinkClassName=''
            activeClassName=''
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            onPageChange={(data) => setPageNumber(data.selected + 1)}
        />
    </>
  )
}

export default Pagination