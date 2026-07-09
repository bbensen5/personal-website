'use client'

import { MouseEvent, useRef, useState } from 'react'

const navItems = [
  { href: '/#top', name: 'Home' },
  { href: '/#about', name: 'About' },
  { href: '/#skills', name: 'Skills' },
  { href: '/#projects', name: 'Projects' },
  { href: '/#experience', name: 'Experience' },
  { href: '/#contact', name: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollFrameRef = useRef<number | null>(null)

  const scrollToSection = (section: HTMLElement) => {
    if (scrollFrameRef.current) {
      window.cancelAnimationFrame(scrollFrameRef.current)
      scrollFrameRef.current = null
    }

    const startY = window.scrollY
    const targetY = startY + section.getBoundingClientRect().top
    const distance = targetY - startY
    const duration = 180
    let startTime: number | null = null

    const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3)

    const step = (currentTime: number) => {
      startTime ??= currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      window.scrollTo(0, startY + distance * easeOut(progress))

      if (progress < 1) {
        scrollFrameRef.current = window.requestAnimationFrame(step)
      } else {
        scrollFrameRef.current = null
      }
    }

    scrollFrameRef.current = window.requestAnimationFrame(step)
  }

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const sectionId = href.split('#')[1]
    const section = sectionId ? document.getElementById(sectionId) : null

    if (section) {
      event.preventDefault()
      scrollToSection(section)
      window.history.pushState(null, '', href)
    }

    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-end px-6 py-2 font-light tracking-wide sm:justify-center sm:py-3"
        id="nav"
      >
        <button
          type="button"
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 text-foreground transition-colors hover:text-highlight active:text-highlight sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-6 bg-current" />
        </button>

        <div className="hidden flex-row flex-wrap items-center justify-center gap-1 sm:flex">
          {navItems.map(({ href, name }) => (
            <a
              key={href}
              href={href}
              className="relative m-1 flex items-center px-3 py-0.5 transition-all hover:text-highlight active:text-highlight"
              onClick={(event) => handleNavClick(event, href)}
            >
              {name}
            </a>
          ))}
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full w-full origin-top border-b border-foreground/10 bg-background shadow-2xl transition-all duration-200 sm:hidden ${
          isOpen
            ? 'visible scale-y-100 opacity-100'
            : 'invisible scale-y-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-3">
          {navItems.map(({ href, name }) => (
            <a
              key={href}
              href={href}
              className="px-6 py-3 text-center transition-colors hover:text-highlight active:text-highlight"
              onClick={(event) => handleNavClick(event, href)}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
