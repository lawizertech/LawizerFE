export function StatsSection() {
  const stats = [
    {
      number: "50,000+",
      label: "Legal Consultations",
    },
    {
      number: "10,000+",
      label: "Documents Drafted",
    },
    {
      number: "5,000+",
      label: "Businesses Served",
    },
  ];

  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
