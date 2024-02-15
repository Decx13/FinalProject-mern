import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

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
              <Link to={`/furniture/${furniture._id}`}>
                  <div className='relative'>
                    <img className='h-60' src={furniture.imageUrl} alt=""/>
                    <div className='absolute top-3 right-3 bg-amber-600 hover:bg-black p-2 rounded' >
                      <h2 className='text-bold text-white'>Buy Now</h2>
                      {/* <FaCartShopping className='w-8 h-8 text-white'/> */}
                    </div>
                  </div>
                  <div>
                      <div>
                        <h3>{furniture.furnitureName}</h3>
                        <p>{furniture.styleTitle}</p>
                      </div>
  
                      <div>
                        <p>{furniture.furnitureDescription}</p>
                      </div>
  
                    
                  </div>
              </Link>
              {/* <button className='bg-amber-600 text-white font-semibold py-2 rounded'>BUY NOW</button> */}
            </Card>)
          }
        </div>
    </div>
  )
}

export default Shop