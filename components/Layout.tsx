import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'

/**
 * Layout Component
 * Main wrapper component that provides consistent layout structure
 * Includes navigation header and footer on all pages
 */
export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      {/* Sticky navigation bar */}
      <Navbar />
      {/* Main content area */}
      <main className="container main">{children}</main>
      {/* Footer with copyright */}
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Made by Aditya — Built with Next.js</div>
      </footer>
    </div>
  )
}
