import Image from 'next/image'

export default function Hero() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-500">
          <Image
            src="/placeholder.svg"
            alt="Foto de perfil de João Silva"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Desenvolvedor Front-end & Especialista em Tráfego Pago</h2>
          <p className="text-xl text-gray-600 mb-8">Transformando ideias em experiências digitais impactantes e lucrativas</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  )
}