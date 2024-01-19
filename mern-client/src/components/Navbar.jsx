import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

//imposrt react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

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
        {link: "Blog", path: "/blog"},
    ]
  return (
    <header>
        <nav>
            <div>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center
                 gap-2'><FaBlog className='inline-block'/>Furniture</Link>

                {/* navbar items for large devices */}
                <ul className='md:flex space-x-12 hidden'>

                    {
                        navItems.map( ({link,path})  => <Link key={path} className='block text-base 
                        text-black uppercase curser-pointer hover:text-blue-700'>{link}</Link> )
                    }
                </ul>

                {/* btn for large devices */}
                <div className='space-x-12 hidden lg-flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                </div>

                {/* menu button for mobiles*/}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                    {
                        isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered 
                        className='h-5 w-5 text-black-700'/>
                    }
                    </button>
                </div>
            </div>

            {/*  navbar items for sm devices */}
            <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" :"hidden"}`}>
                {
                   navItems.map( ({link,path})  => <Link key={path} className='block text-base 
                   text-white uppercase curser-pointer'>{link}</Link> ) 
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar