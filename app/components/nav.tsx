import Link from 'next/link'

const navItems = [
  { href: '/#top', name: 'Home' },
  { href: '/#about', name: 'About' },
  { href: '/#skills', name: 'Skills' },
  { href: '/#projects', name: 'Projects' },
  { href: '/#experience', name: 'Experience' },
  { href: '/#contact', name: 'Contact' },
  { href: '/blog', name: 'Blog' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-center px-6 py-3 font-light tracking-wide"
        id="nav"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-1">
          {navItems.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className="relative m-1 flex items-center px-3 py-0.5 transition-all hover:text-highlight"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
