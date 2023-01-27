import React from 'react'
import { useParams } from 'react-router-dom'
import dataJSON from '../Components/DATA/dataJSON';
import "../index.css"

const Product = () => {
  const {id}=useParams();
  return (

<div className='card-product-container'>
{(dataJSON.filter((elems)=>elems.id==(id))).map((elem)=>

<div className='card-product'>
<img className='prod-img' src={elem.image}width='310px' height={"220px"}/>
              <h4>{elem.name}</h4>
              <p> {elem.Specs}</p>
              <h2>{elem.Price}</h2>
</div>

)}
</div>

  )
}

export default Product