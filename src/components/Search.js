import React from 'react'
import {MdSearch} from 'react-icons/md'

const Search = ({setSearchText}) => {
  

  return (
    <div className='search'>
      <MdSearch size='1.3em' cursor='search--btn'/>
      <input
        type='text'
        placeholder='search note...'        
        onChange= {(event)=>setSearchText(event.target.value)}   
        className='search--input'
   
      />
    </div>
  )
}

export default Search