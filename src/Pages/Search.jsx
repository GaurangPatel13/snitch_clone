import React from 'react'
import SearchBar from '../Components/Search/SearchBar'
import SearchCats from '../Components/Search/SearchCats'
import NewAndPopular from '../Components/Home/NewAndPopular'

const Search = () => {
  return (
      <div className='sm:max-w-lg w-full mx-auto font-hero bg-white p-5 space-y-5'>
          <SearchBar />
          <SearchCats />
          <NewAndPopular />
    </div>
  )
}

export default Search