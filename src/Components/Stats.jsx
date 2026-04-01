const Stats = () => {
    const stats = [
      { value: "50K+", label: "Active Users" },
      { value: "200+", label: "Premium Tools" },
      { value: "4.9", label: "Rating" },
    ];
  
    return (
      <section className="bg-violet-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 divide-x divide-violet-500">
            {stats.map((stat, index) => (
          <div key={index} className="text-center py-4 px-6">
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-violet-200 text-sm md:text-base mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
        </div>
        </div>
      </section>
    );
  };
  
  export default Stats;
  