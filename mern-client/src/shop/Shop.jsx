import React, { useEffect, useState } from 'react'

const Shop = () => {
  const[Furniture, setFurniture] = useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-furniture").then(res => res.json()).then(data => setFurniture(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center'>All Furniture are here</h2>


    </div>
  )
}

export default Shop