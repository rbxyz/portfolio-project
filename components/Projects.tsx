import { useState } from 'react'

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
}

const projects: Project[] = [
  { id: 1, title: "E-commerce Redesign", description: "Redesenho completo de uma loja online, aumentando as conversões em 35%", category: "frontend" },
  { id: 2, title: "Campanha de Mídia Paga", description: "Gerenciamento de campanha no Google Ads com ROI de 300%", category: "ads" },
  { id: 3, title: "App de Produtividade", description: "Desenvolvimento de um aplicativo React Native para gestão de tarefas", category: "frontend" },
  { id: 4, title: "Otimização de Funil", description: "Análise e otimização de funil de vendas, aumentando a taxa de conversão em 25%", category: "ads" },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Meus Projetos</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('all')}
          >
            Todos
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'frontend' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('frontend')}
          >
            Front-end
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${activeTab === 'ads' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveTab('ads')}
          >
            Tráfego Pago
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}