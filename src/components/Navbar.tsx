'use client'

import React from 'react'

const Navbar = () => {
  const links = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium">
        <div className="text-lg font-semibold">Kurt Chua</div>
        <div className="space-x-4">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:underline text-gray-700">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
