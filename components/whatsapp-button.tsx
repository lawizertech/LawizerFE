import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  )
}
