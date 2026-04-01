const Steps = () => {
    const steps = [
      {
        number: "01",
        icon: "/assets/user.png",
        title: "Create Account",
        description:
          "Sign up for free in seconds. No credit card required to get started.",
      },
      {
        number: "02",
        icon: "/assets/package.png",
        title: "Choose Products",
        description:
          "Browse our catalog and select the tools that fit your needs perfectly.",
      },
      {
        number: "03",
        icon: "/assets/rocket.png",
        title: "Start Creating",
        description:
          "Download and start using your premium tools immediately after purchase.",
      },
    ];
  
    return (
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
         <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get Started In 3 Steps
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>
  
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-violet-100 z-0"></div>
  
            {steps.map((step, index) => (
            <div
                key={index}
                className="relative bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              <div className="text-xs font-bold text-violet-400 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Steps;
  