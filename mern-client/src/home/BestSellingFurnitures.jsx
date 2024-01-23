import React, { useEffect, useState } from 'react'
import FurnitureCards from '../components/FurnitureCards';

const BestSellingFurnitures = () => {
    const [ furniture, setFurniture] = useState([]);

    useEffect(   () =>  {
        fetch("http://localhost:5000/all-furniture").then(res => res.json()).then( data => setFurniture(data.slice(0,7)))
    } ,[])
  return (
    <div>
        <FurnitureCards furniture = {furniture} headline ="Best Seller Furnitures!!"/>
    </div>
  )
}

export default BestSellingFurnitures