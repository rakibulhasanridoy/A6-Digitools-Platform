import Group from '/assets/Group 5.png'



const Banner = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
      <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-600 text-sm font-medium px-4 py-1.5 rounded-full">
             <img src={Group} alt="" /> New: AI-Powered Tools Available
    </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Supercharge Your{" "}
            <span className="text-violet-600">Digital Workflow</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity
            software — all in one place. Start creating faster today.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg shadow-violet-200 hover:shadow-violet-300">
              Explore Products
          </button>
            <button className="flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-7 py-3.5 rounded-full hover:border-violet-300 hover:text-violet-600 transition-all">
            <img src="/assets/Play.png" alt="play" className="w-4 h-4" />
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 pt-2">
           <span>✓ 50K+ Active Users</span>
            <span>✓ 200+ Premium Tools</span>
          <span>✓ Cancel Anytime</span>
          </div>
        </div>
        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-100 to-purple-50 rounded-3xl scale-105 blur-xl opacity-60"></div>
         <img
              src="/assets/banner.png"
              alt="Digital Workflow"
              className="relative w-full max-w-md rounded-3xl shadow-2xl object-cover"
            />
         </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
