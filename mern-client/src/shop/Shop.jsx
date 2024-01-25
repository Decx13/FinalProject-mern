import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

const Shop = () => {
  const[furniture, setFurniture] = useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-furniture").then(res => res.json()).then(data => setFurniture(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center'>All Furniture are here</h2>

        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
          {
             furniture.map(furniture =>   <Card
              
            >
              <img src={furniture.imageUrl} alt="" className='h-60' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               <p>
                {furniture.furnitureName}
               </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {furniture.furnitureDescription}
              </p>

              <button className='bg-amber-600 text-white font-semibold py-2 rounded'>BUY NOW</button>
            </Card>)
          }
        </div>
    </div>
  )
}

export default Shop