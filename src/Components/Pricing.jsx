const Pricing = () => {
    const plans = [
      {
        name: "Starter",
        tagline: "Perfect for getting started",
        price: 0,
        period: "Month",
        highlight: false,
        buttonText: "Get Started Free",
        features: [
          "Access to 10 free tools",
          "Basic templates",
          "Community support",
          "1 project per month",
        ],
      },
      {
        name: "Pro",
        tagline: "Ideal for professionals",
        price: 29,
        period: "Month",
        highlight: true,
        badge: "Most Popular",
        buttonText: "Start Pro Trial",
        features: [
          "Access to all premium tools",
          "Unlimited templates",
          "Priority support",
          "Unlimited projects",
          "Cloud sync",
          "Advanced analytics",
        ],
      },
      {
        name: "Enterprise",
        tagline: "For teams and businesses",
        price: 99,
        period: "Month",
        highlight: false,
        buttonText: "Contact Sales",
        features: [
          "Everything in Pro",
          "Team collaboration",
          "Custom integrations",
          "Dedicated support",
          "SLA guarantee",
          "Custom branding",
        ],
      },
    ];
  
    return (
      <section className="bg-white py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
             Simple, Transparent Pricing
           </h2>
          <p className="text-gray-500 mt-3 text-lg">
              Choose the plan that fits your needs. Upgrade or downgrade any time.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 flex flex-col gap-5 transition-all ${
                 plan.highlight
                    ? "bg-violet-600 text-white shadow-2xl shadow-violet-200 scale-105"
                    : "bg-gray-50 border border-gray-100 text-gray-900"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
  
                <div>
                <h3
                    className={`text-xl font-bold ${
                      plan.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                 <p
                    className={`text-sm mt-1 ${
                      plan.highlight ? "text-violet-200" : "text-gray-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                </div>
  
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span
                    className={`text-sm ${
                     plan.highlight ? "text-violet-200" : "text-gray-400"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
  
               <ul className="space-y-2 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span
                        className={
                          plan.highlight ? "text-violet-200" : "text-violet-500"
                      }
                      >
                        ✓
                      </span>
                      <span
                        className={
                          plan.highlight ? "text-violet-100" : "text-gray-600"
                       }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
               </ul>
  
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition ${
                    plan.highlight
                      ? "bg-white text-violet-600 hover:bg-violet-50"
                      : "bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-100"
                  }`}
               >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
      </div>
      </section>
    );
  };
  
  export default Pricing;
  