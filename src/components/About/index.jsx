import React from 'react'
import './style.css'
import {useLocation} from 'react-router-dom'

export const About = () => {

  const { state } = useLocation();

  return(
    <div>
      <h1>
        About
        <p>
          {state}
        </p>
      </h1>
    </div>
  )
}