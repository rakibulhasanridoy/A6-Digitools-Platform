import { useState, useEffect } from 'react';
import Products from './Products';
import Cart from './Cart';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const event = new CustomEvent('cartUpdate', { detail: cartItems.length });
    window.dispatchEvent(event);
  }, [cartItems]);

  const addToCart = (product) => {
    const isExist = cartItems.find(item => item.id === product.id);
    if (!isExist) {
      setCartItems([...cartItems, product]);
      toast.success(`Product added to cart!`, {
        position: "top-right",
        autoClose: 2000,
        style: { background: '#DBFCE7', color: '#0A883E', fontWeight: 'bold' }
      });
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.error(`Product removed from cart!`, {
      position: "top-right",
      autoClose: 2000,
      style: { background: '#FEECEC', color: '#EF4444', fontWeight: 'bold' }
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Order placed successfully!", {
      position: "top-right",
      autoClose: 3000,
      style: { background: '#E1E7FF', color: '#4F39F6', fontWeight: 'bold' }
    });
  };

  return (
    <div className='mt-20 md:mt-30 pb-20'>
      <ToastContainer />
      
      <div className='max-w-[90%] md:max-w-[80%] mx-auto flex flex-col items-center'>
        <div className='text-center mb-8'>
          <h1 className='text-[36px] md:text-[48px] font-extrabold text-[#0B132A] leading-tight'>
            Premium Digital Tools
          </h1>
          <p className='text-[16px] text-[#627382] mt-4 max-w-xl mx-auto'>
            Choose from our curated collection of premium digital products.
          </p>
        </div>

        <div className="inline-flex p-1.5 border border-gray-100 rounded-full bg-white shadow-sm mb-10">
          <button 
            onClick={() => setActiveTab('products')} 
            className={`px-8 md:px-10 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'products' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg' : 'text-[#0B132A] hover:bg-gray-50'}`}
          >
            Products
          </button>
          <button 
            onClick={() => setActiveTab('cart')} 
            className={`px-8 md:px-10 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg' : 'text-[#0B132A] hover:bg-gray-50'}`}
          >
            Cart ({cartItems.length})
          </button>
        </div>

        <div className="w-full min-h-[500px]">
          {activeTab === 'products' ? (
            <Products addToCart={addToCart} cartItems={cartItems} />
          ) : (
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;