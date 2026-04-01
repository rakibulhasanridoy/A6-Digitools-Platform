import React, { useState, useEffect } from 'react'
import shoppingCart from '/assets/products/shopping-cart.png'

const Navbar = () => {
  const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  useEffect(() => {
    const handleCartUpdate = (event) => {
      setCount(event.detail);
    };
    window.addEventListener('cartUpdate', handleCartUpdate);
    return () => {
      window.removeEventListener('cartUpdate', handleCartUpdate);
    };
  }, []);
  return (
    <div className='shadow-sm shadow-[#00000025] bg-white sticky top-0 z-50 font-sans'>
      <div className='max-w-[95%] md:max-w-[90%] lg:max-w-[80%] mx-auto flex justify-between items-center py-4 lg:py-6.5'>

        <div>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
            DigiTools
          </h1>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex justify-between items-center gap-8 text-[#101727] font-medium'>
            <li><a href="#" className='hover:text-[#4F39F6] transition'>Products</a></li>
            <li><a href="#" className='hover:text-[#4F39F6] transition'>Features</a></li>
            <li><a href="#" className='hover:text-[#4F39F6] transition'>Pricing</a></li>
            <li><a href="#" className='hover:text-[#4F39F6] transition'>Testimonials</a></li>
            <li><a href="#" className='hover:text-[#4F39F6] transition'>FAQ</a></li>
          </ul>
        </div>
        <div className='flex items-center gap-4 lg:gap-6'>
          
          <div className='relative cursor-pointer'>
            <img src={shoppingCart} alt="Cart" className='w-6 md:w-7' />
            <p className='absolute -top-1.5 -right-1.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white flex items-center justify-center min-w-4.5'>
              <span id='cartCount'>{count}</span>
            </p>
          </div>
          <div className='hidden lg:flex items-center gap-4'>
            <a href="#" className="hover:text-[#4F39F6] transition font-medium">Login</a>
            <button className='px-6 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-medium hover:opacity-90 transition'>
              Get Started
            </button>
          </div>
          <div 
            className='lg:hidden flex flex-col gap-1 cursor-pointer p-1' 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.75 bg-[#9514FA] rounded-full transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.75' : ''}`}></span>
            <span className={`w-6 h-0.75 bg-[#9514FA] rounded-full transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.75 bg-[#9514FA] rounded-full transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.75' : ''}`}></span>
          </div>
        </div>
      </div>
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <ul className='flex flex-col p-6 gap-4 text-[#101727] font-medium'>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Products</a></li>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Features</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#" onClick={() => setIsMenuOpen(false)}>FAQ</a></li>
          <hr className='border-gray-100' />
          <div className='flex flex-col gap-4'>
            <a href="#" className="text-center py-2 font-medium">Login</a>
            <button className='w-full py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl font-medium'>
              Get Started
            </button>
        </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;