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
  ]

  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
