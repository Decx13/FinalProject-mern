import React from 'react'
import { Link } from 'react-router-dom'
import FurnitureImage from "../assets/slideImages/bed.jpg"

const PromotionArea = () => {
  return (
    <div className='mt-16 py-12 bg-amber-200 px-4 lg:px-24'>

        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Seasonal Offers! Grab it now</h2>
                <Link to="/shop" className='mt-12 block'><button className='bg-amber-600 text-white font-semibold px-4 
                        py-2 rounded hover:bg-black transition-all duration-300 '>Get The Offers</button></Link>
            </div>

            <div className=''>
                <img src={FurnitureImage} alt="" className='w-96' /> 
            </div>

     </div>
       


    </div>
  )
}

export default PromotionArea