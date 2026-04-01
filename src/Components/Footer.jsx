const Footer = () => {
    return (
      <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <img src="/assets/package.png" alt="logo" className="w-8 h-8" />
                <span className="text-2xl font-bold text-white">
                  Digi<span className="text-violet-400">Tools</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Premium digital tools for creators, professionals, and businesses.
                Work smarter with our suite of powerful tools.
              </p>
            </div>
            {/* Product */}
            <div className="md:col-span-2">
              <h3 className="text-violet-400 font-semibold mb-5 text-sm uppercase tracking-wider">
                Product
             </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Features", "Pricing", "Templates", "Integrations"].map(
                  (item) => (
                    <li key={item}>
                     <a href="#" className="hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            {/* Company */}
           <div className="md:col-span-2">
              <h3 className="text-violet-400 font-semibold mb-5 text-sm uppercase tracking-wider">
                Company
            </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["About", "Blog", "Careers", "Press"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                    {item}
                    </a>
                  </li>
              ))}
              </ul>
            </div>
  
            {/* Resources */}
           <div className="md:col-span-2">
              <h3 className="text-violet-400 font-semibold mb-5 text-sm uppercase tracking-wider">
                Resources
            </h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Documentation", "Help Center", "Community", "Contact"].map(
                  (item) => (
                    <li key={item}>
                    <a href="#" className="hover:text-white transition">
                        {item}
                      </a>
                   </li>
                  )
                )}
              </ul>
            </div>
  
            {/* Social */}
           <div className="md:col-span-2">
              <h3 className="text-violet-400 font-semibold mb-5 text-sm uppercase tracking-wider">
                Social Links
             </h3>
              <div className="flex gap-3 flex-wrap">
                {["𝕏", "in", "yt", "dc"].map((icon) => (
                 <a
                    key={icon}
                  href="#"
                    className="w-9 h-9 bg-gray-800 hover:bg-violet-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white text-xs font-bold transition"
                >
                    {icon}
                  </a>
               ))}
             </div>
            </div>
         </div>
          {/* Bottom Bar */}
          <div className="mt-14 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>
          <div className="flex gap-6">
              <a href="#" className="hover:text-violet-400 transition">
                Privacy Policy
             </a>
              <a href="#" className="hover:text-violet-400 transition">
                Terms of Service
             </a>
              <a href="#" className="hover:text-violet-400 transition">
              Made with ❤️ for Teams
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;
  