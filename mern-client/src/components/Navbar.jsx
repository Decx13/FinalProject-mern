import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//imposrt react icons
import { FaBarsStaggered, FaCouch, FaXmark } from "react-icons/fa6";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //toggle menu
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);

    }

    useEffect( () => {
        const handleScroll = ()  => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else setIsSticky(false);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll",handleScroll);
        }
          
    }, [])

    // navbar items

    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Shop", path: "/shop"},
        {link: "Your Products", path: "/admin/dashboard"},
        {link: "Blog", path: "/blog"}
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 right-0 left-0 transition-all ease-in duration-300'>
        <nav className= {`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-orange-200" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-amber-600 flex items-center
                 gap-2'><FaCouch className='inline-block'/>Furniture</Link>

                {/* navbar items for large devices */}
                <ul className='md:flex space-x-12 hidden'>

                    {
                        navItems.map( ({link,path})  => <Link key={path} className='block text-base 
                        text-black uppercase curser-pointer hover:text-amber-600'>{link}</Link> )
                    }
                </ul>

                {/* btn for large devices */}
                <div className='space-x-12 hidden lg-flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-amber-600'/></button>
                </div>

                {/* menu button for mobiles*/}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                    {
                        isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered 
                        className='h-5 w-5 text-amber-600'/>
                    }
                    </button>
                </div>
            </div>

            {/*  navbar items for sm devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-amber-600 ${isMenuOpen ? "block fixed top-0 right-0 left-0" :"hidden"}`}>
                {
                   navItems.map( ({link,path})  => <Link key={path} className='block text-1xl 
                   text-white font-semibold uppercase curser-pointer hover:text-black'>{link}</Link> ) 
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar