import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

export const Menu = () => {
  return(
    <nav className='menu'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about' state={'This is state from About'}>About</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/posts/10'>Posts 10</Link></li>
        <li><Link to='/redirect'>Redirect</Link></li>
      </ul>
    </nav>
  )
}

//A utilização da tag a possui como consequência o refresh da página, algo que pode prejudicar o funcionamento do site, como a perda de um estado do componente