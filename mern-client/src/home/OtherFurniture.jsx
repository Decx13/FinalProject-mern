import React, { useEffect, useState } from 'react'
import FurnitureCards from '../components/FurnitureCards';

const OtherFurniture = () => {
    const [ furniture, setFurniture] = useState([]);

    useEffect(   () =>  {
        fetch("http://localhost:5000/all-furniture").then(res => res.json()).then( data => setFurniture(data.slice(5,10)))
    } ,[])
  return (
    <div>
        <FurnitureCards furniture = {furniture} headline ="Other Furniture in Our Store"/>
    </div>
  )
}

export default OtherFurniture