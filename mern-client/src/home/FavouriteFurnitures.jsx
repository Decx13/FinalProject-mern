import React, { useEffect, useState } from 'react'
import FurnitureCards from '../components/FurnitureCards';

const FavouriteFurnitures = () => {
    const [ furniture, setFurniture] = useState([]);

    useEffect(   () =>  {
        fetch("http://localhost:5000/all-furniture").then(res => res.json()).then( data => setFurniture(data))
    } ,[])
  return (
    <div>
        <FurnitureCards furniture = {furniture} headline ="Best Seller Furnitures!!"/>
    </div>
  )
}

export default FavouriteFurnitures