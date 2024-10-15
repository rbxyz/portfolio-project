import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 border-b">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ruan Gabriel Ferreira Bueno</h1>
        <div className="space-x-4">
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            Sobre
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground">
            Projetos
          </Link>
          <Link href="#skills" className="text-muted-foreground hover:text-foreground">
            Habilidades
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}