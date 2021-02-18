import React from 'react'
import HomeSearch from './HomeSearch'
import Navbar from './Navbar'
import SearchIcon from './SearchIcon'
import Slogan from './Slogan'

import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <Navbar />
        <HomeSearch />
        <Slogan />
        <SearchIcon />
      </header>
    </div>
  )
}

export default Header
