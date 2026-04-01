import React, { useState, useEffect } from 'react';

const Products = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Data.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);
  return (
    <div className="bg-[#FFFFFF] min-h-screen p-6 md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          const isInCart = cartItems.find(item => item.id === product.id);

          return (
            <div 
              key={product.id} 
              className="relative bg-white rounded-4xl border border-gray-100 p-8 shadow-sm transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold tracking-wide ${
                    product.tagType === 'best-seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' : 
                    product.tagType === 'popular' ? 'bg-[#E1E7FF] text-[#6366F1]' : 
                    'bg-[#DBFCE7] text-[#0A883E]'
                  }`}>
                    {product.tag}
                  </span>
                </div>

                
                <div className="w-16 h-16 rounded-full border border-gray-50 flex items-center justify-center mb-6 bg-[#FFFFFF] shadow-[0px_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
                  <img 
                    src={product.icon} 
                    alt={product.name} 
                    className="w-8 h-8 object-contain" 
                  />
                </div>

                
                <h2 className="text-[24px] font-bold text-[#0F172A] mb-3 leading-tight">
                  {product.name}
              </h2>
                <p className="text-[#64748B] text-[15px] leading-relaxed mb-6 h-11.25 line-clamp-2">
                  {product.description}
                </p>

                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-[32px] font-extrabold text-[#0F172A]">${product.price}</span>
                  <span className="text-[#94A3B8] text-sm font-medium uppercase tracking-wider">
                    /{product.period === 'monthly' ? 'Mo' : 'One-Time'}
                  </span>
                </div>

                
                <div className="space-y-3 mb-10">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-[#475569]">
                      <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                        className="w-5 h-5 flex-shrink-0 text-[#22C55E]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[15px] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => addToCart(product)}
                disabled={isInCart}
                className={`btn h-auto w-full py-4 rounded-full text-white font-bold transition-all shadow-md ${
                  isInCart 
                    ? 'bg-[#0A883E] cursor-not-allowed shadow-none' 
                    : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 active:scale-[0.98]'
                }`}
              >
                {isInCart ? 'Product Added' : 'Buy Now'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;