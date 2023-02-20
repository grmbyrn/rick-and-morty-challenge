import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className=' flex justify-center'>
      <div className='relative bg-white px-6 py-2 rounded-full'>
        <input 
            onChange={e => {
                setPageNumber(1)
                setSearch(e.target.value)
            }} 
            placeholder='Type to search...' 
            type="text"
            className='outline-none'
        />
        <button>
          <FontAwesomeIcon icon={faSearch} onClick={(e) => {e.preventDefault()}} />
        </button>
      </div>
    </form>
  )
}

export default Search