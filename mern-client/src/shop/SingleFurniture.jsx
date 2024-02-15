import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom'

const SingleFurniture = () => {
    const {_id,furnitureName,imageUrl,furnitureDescription } = useLoaderData();

  return (
    <div className='mt-24 px-4 lg:px-24'>

       <div className='flex flex-col md:flex-row justify-between gap-20'>

              <div className='md:w-1/2'>

                <img src={imageUrl} alt="" className='h-96 w-200 mb-6 mt-10 border-4 border-rgb(203 213 225)'/>
                <h2 className='font-bold text-3xl'>{furnitureName}</h2>
                <p className='font-bold text-3xl mt-3'>{furnitureDescription}</p>
              

              </div>
           

              <div className='md:w-2/3'>

              <h1 className='text-4xl font-bold  mb-6 leading-snug mt-7 '>
                If you are interested to buy this please contact us quickly!</h1>

              <div className='flex gap-20'>
                
                 <div className='flex flex-col' >

                      <FaWhatsapp className='w-16 h-16 text-white bg-green-600 rounded mt-10 p-2'/>
                      <Link to="https://wa.me/+94766096965" className='mt-5 block ' target="_blank"><button className='bg-amber-600 text-white font-semibold px-4 
                        py-2 rounded hover:bg-black transition-all duration-300 '>Chat On WhatsApp</button></Link>
    
                 </div>

               
                  <div className='' >

                      <FaPhone className='w-16 h-16 text-white bg-green-600 rounded mt-10 p-2'/>
                      <Link to="" className='mt-5 block'><button className='bg-amber-600 text-white font-semibold px-4 
                        py-2 rounded hover:bg-black transition-all duration-300 '>+94 71 2534574</button></Link>
    
                 </div> 
            </div>

             <div class=" inset-0 bg-gray-300 mt-10">
                  <iframe className='h-80' width="100%" 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15869.79854320593!2d80.2311068!3d6.0699401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17169e5aa6c39%3A0x2c76ef942ab51daf!2sLiyanage%20Lee%20Weladha%20Sala!5e0!3m2!1sen!2slk!4v1708013767048!5m2!1sen!2slk" ></iframe>
                  </div>

              </div>

          </div>
    </div>
  )
}

export default SingleFurniture