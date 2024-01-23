import React from 'react'
import FavFurnitureImg from "../assets/slideImages/cubboard.jpg"
import { Link } from 'react-router-dom'

const FavFurniture = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-20 '>
            <div className='md:w-1/2'>
                    <img src={FavFurnitureImg} alt="" className='rounded md:w-20/12' />
            </div>

            <div className='md:w-1/2 space-y-6'>
                    <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favourite<span 
                    className='text-amber-600'>Furniture here!</span></h2>
                    <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Est molestiae explicabo cumque facilis eaque illo quos, dolore quasi et esse exercitationem mollitia
                     sunt consectetur quam. Voluptas eius necessitatibus ducimus dolor.</p>

                    {/* current status */}
                     <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                        <div>
                            <h3 className='text-3xl font-bold '>100+</h3>
                            <p className='text-base'>Furniture Items</p>
                        </div>

                        <div>
                            <h3 className='text-3xl font-bold '>500+</h3>
                            <p className='text-base'>Customers</p>
                        </div>

                        <div>
                            <h3 className='text-3xl font-bold '>1000+</h3>
                            <p className='text-base'>Orders and Sellings</p>
                        </div>
                     </div>

                     <Link to="/shop" className='mt-12 block'><button className='bg-amber-600 text-white font-semibold px-4 
                     py-2 rounded hover:bg-black transition-all duration-300 '>Explore More</button></Link>


            </div>


    </div>
  )
}

export default FavFurniture