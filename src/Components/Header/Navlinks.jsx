import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Navlinks extends Component {
  render() {
    return (
      <>
        <ul className='ul-navlinks'>
          <img /> 
        <NavLink to='/'>  <li>Home</li></NavLink>
        <NavLink to='/Discount'>   <li>Discounts</li></NavLink>
        <NavLink to='About'>    <li>About</li></NavLink>
        <NavLink to='/Login'>    <li>Login</li></NavLink>
        </ul>
      </>
    )
  }
}

export default Navlinks