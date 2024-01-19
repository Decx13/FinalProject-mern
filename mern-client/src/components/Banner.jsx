import React from 'react'
import BannerSlide from '../home/BannerSlide'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-slate-200 flex items-center'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold  leading-snug text-black'>Buy and sell your furniture <span className='text-amber-600'>
                    with us and for the best rates!</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora rem accusamus, deleniti 
                    voluptatum illum, nulla unde expedita fugit fugiat soluta minima veritatis 
                    rerum id cumque commodi obcaecati repudiandae laboriosam.</p>
                    <div>
                        <input type='search' name='search' id='search' placeholder='search a furniture' 
                        className='py-2 px-2 rounded-lg outline-none h-10'/>
                        <button className='bg-amber-600 px-6 text-white font-bold font-medium hover:bg-black transition-all 
                        ease-in duration-200 radius-12 rounded-lg h-10'>search</button>
                    </div>
            </div>

            {/* right side */}
            <div>
                <BannerSlide/>
            </div>
        </div>
    </div>
  )
}

export default Banner