import React from 'react'
import { useParams } from 'react-router-dom'
import dataJSON from '../Components/DATA/dataJSON';
import Layout from './Layout'

const Product = () => {
  const {id}=useParams();
  return (
  <>
  <Layout/>
<div>
  {console.log(dataJSON.filter((elems)=>elems.id==(id)).map((elem)=>{
    <p> {elem.Price}</p>
  }))}
</div>
  </>
  )
}

export default Product