import React from 'react'

const About = () => {
  return (
    <div  className='mt-28 px-4 lg:px-24  items-center'>
      
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to Liyanage Furniture</h2>

                  <p class="mb-4 text-amber-600 font-weight-400 text-2xl">where style meets comfort! At Liyanage Furniture,
                  we're passionate about helping you create the perfect living space. With our curated collection 
                  of high-quality furniture pieces, ranging from modern to classic designs, you'll find everything you
                   need to transform your house into a home.</p>

                  <p className='text-xl'>Our team of experts is dedicated to providing exceptional customer service and 
                    assisting you in selecting the ideal furniture pieces that reflect your unique style
                     and personality. Whether you're furnishing a cozy apartment or a spacious family home,
                     Liyanage Furniture is your destination for premium furniture solutions that elevate your lifestyle. 
                    Discover timeless elegance and unmatched comfort with Liyanage Furniture.</p>
              </div>
              <div class="grid grid-cols-2 gap-4 mt-8">
                  <img class="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1487015307662-6ce6210680f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="office content 1"></img>
                  <img class="mt-4 w-full lg:mt-10 rounded-lg" 
                  src="https://images.unsplash.com/photo-1636138388621-258a72ecb07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHdvb2QlMjBkaW5uaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" 
                  alt="office content 2"></img>
              </div>
          </div>

    </div>
  )
}

export default About