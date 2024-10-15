import { Mail, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Vamos trabalhar juntos?</h2>
        <p className="mb-6">Entre em contato e vamos transformar sua presença digital!</p>
        <div className="flex justify-center space-x-4">
          <a href="mailto:seu-email@exemplo.com" className="p-2 border rounded-full hover:bg-gray-200 transition-colors" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full hover:bg-gray-200 transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://twitter.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full hover:bg-gray-200 transition-colors" aria-label="Twitter">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/rbxyz.dev/" target="_blank" rel="noopener noreferrer" className="p-2 border rounded-full hover:bg-gray-200 transition-colors" aria-label="Instagram">
            <Instagram className="h-4 w-4"/>
          </a>
        </div>
        <p className="container mx-auto text-center mt-4">Todos os direitos reservados © 2024</p>
      </div>
    </footer>
  )
}
