import { Code, Facebook } from "lucide-react"

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Minhas Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Code className="mr-2" />
              Desenvolvimento Front-end
            </h3>
            <ul className="list-disc list-inside">
              <li>React e Next.js</li>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Facebook className="mr-2" />
              Tráfego Pago
            </h3>
            <ul className="list-disc list-inside">
              <li>Google Ads</li>
              <li>Facebook Ads</li>
              <li>Analytics e Otimização de Conversão</li>
              <li>Remarketing</li>
              <li>Estratégias de Funil</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}