const CallToAction = () => {
    return (
      <section className="bg-gradient-to-br from-violet-600 to-purple-700 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready To Transform Your Workflow?
          </h2>
         <p className="text-violet-200 text-lg mt-4 mb-8">
            Join thousands of professionals who are already using DigiTools to
           work smarter. Start your free trial today.
          </p>
  
          <div className="flex flex-wrap justify-center gap-4">
           <button className="bg-white text-violet-600 font-bold px-8 py-3.5 rounded-full hover:bg-violet-50 transition shadow-lg">
              Explore Products
           </button>
            <button className="border-2 border-white/40 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition">
              View Pricing
            </button>
        </div>
  
        <p className="text-violet-300 text-sm mt-6">
            14-day free trial • No credit card required • Cancel anytime
         </p>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  