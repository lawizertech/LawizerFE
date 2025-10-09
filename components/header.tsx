import { Button } from "@/components/ui/button"
import { ChevronDown, Scale } from "lucide-react"

export function Header() {
  return (
    <header className="w-11/12 max-w-6xl rounded-4xl bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
              <img src="/logoLawizer.png" alt="Lawizer Logo" className="w-6 h-6" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#c92c41]">Lawizer</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button className="flex items-center gap-1 text-gray-700 hover:text-primary text-sm font-medium transition-colors">
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-gray-700 hover:text-primary text-sm font-medium transition-colors">
              Documents
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-gray-700 hover:text-primary text-sm font-medium transition-colors">
              Resources
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="text-gray-700 hover:text-primary text-sm font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-primary text-sm font-medium transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-700 hover:text-primary text-sm font-medium transition-colors">
              Login
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium shadow-lg">
            Get Legal Help
          </Button>
        </div>
      </div>
    </header>
  )
}
