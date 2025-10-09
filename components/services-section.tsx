import { Video, FileText, Building, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: "Virtual Consultations",
      description:
        "Connect with experienced attorneys through secure video calls from anywhere. Get expert legal advice without leaving your home or office.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: FileText,
      title: "Document Review & Drafting",
      description:
        "Professional legal document preparation and review services. From contracts to agreements, we ensure your documents are legally sound.",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Building,
      title: "Business Legal Support",
      description:
        "Comprehensive legal services for businesses of all sizes. Entity formation, compliance, contracts, and ongoing legal counsel.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: Briefcase,
      title: "Case Management",
      description:
        "End-to-end case management with dedicated attorneys. Track your case progress and communicate with your legal team seamlessly.",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Need expert consultation on legal matters? You're in the right place. Experienced legal professionals are
            here for you 24/7. Whether it's a simple question or a complex case, our experts are ready to help with
            clear and reliable advice.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            No legal jargon, just simple, straightforward support. Let us take the worry out of your legal matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
