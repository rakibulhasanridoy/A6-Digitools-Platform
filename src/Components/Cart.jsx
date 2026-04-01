import React from 'react';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  
  if (cartItems.length === 0) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-4">
        <div className="w-full md:w-[80%] mx-auto relative p-[1.5px] rounded-[32px] overflow-hidden bg-white shadow-sm border border-[#4F39F6]/10">
          <div className="bg-white rounded-[30px] p-16 md:p-32 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-[#F5F3FF] rounded-full flex items-center justify-center mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#4F39F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h1 className="text-[30px] md:text-[36px] font-bold text-[#0F172A] mb-4">Your cart is empty</h1>
            <p className="text-[#64748B] text-lg max-w-md">
                Click on the <span className="font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">"Products"</span> tab to explore and add your favorite tools to the cart.
            </p>
          </div>
        </div>
      </div>
    );
  }

 
  return (
    <div className="w-full md:w-[80%] mx-auto p-6 md:p-10 bg-white rounded-[32px] shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-[#0F172A] mb-8 px-2">Selected Products</h2>
      
      <div className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-5 bg-gray-50/50 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white rounded-xl shadow-xs flex items-center justify-center p-3 border border-gray-50">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] text-lg">{item.name}</h3>
                <p className="text-[#64748B] text-sm font-medium mt-1">${item.price}</p>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)} 
              className="text-[#FF4D4D] font-bold hover:text-red-700 transition-colors px-4 py-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-8 border-t border-gray-100">
        <div className="flex justify-between items-center mb-8 px-2">
          <span className="text-[#64748B] text-lg font-medium">Total Amount:</span>
          <span className="text-[32px] font-extrabold text-[#0F172A]">${totalPrice}</span>
        </div>
        
        <button 
          onClick={clearCart} 
          className="w-full py-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-lg font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:opacity-95 transition-all active:scale-[0.98]"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;