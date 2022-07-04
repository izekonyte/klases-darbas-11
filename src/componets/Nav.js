import React from 'react'

const Nav = ({setShowFav, getCard}) => {
  return (
    <nav>
        <ul>
            <li> Main </li>
            <li onClick={()=>setShowFav(true)}>Favorites</li>

        </ul>
        
    </nav>
  )
}

export default Nav