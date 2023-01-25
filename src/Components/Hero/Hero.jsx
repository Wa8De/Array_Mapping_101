import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import dataJSON from "../DATA/dataJSON"

export class Hero extends Component {
  render() {
    return (
        <div className='cards-container'>
          {dataJSON.map((elem)=>
            <div className='card'>
            {/* <NavLink to='/Product'> */}
              <img className='prod-img' src={elem.image}width='310px' height={"220px"}/>
              <h4>{elem.name}</h4>
              <p> {elem.Specs}</p>
              <h2>{elem.Price}</h2>
              <button>Buy</button>
              {/* </NavLink> */}
          </div>

          )}
      </div>
    )
  }
}

export default Hero