import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'

export default function Header() {
  const context = useContext(AppContext)
  if (!context) throw new Error('Header must be used within AppProvider')

  const { toggleDrawer } = context

  return (
    <header className="w-full top-0 sticky z-50 bg-primary-dark border-b border-white/10">
      <div className="flex justify-between items-center px-gutter py-3 max-w-container-max mx-auto">
        <NavLink to="/" className="font-logo text-2xl text-secondary-cream tracking-tight hover:text-accent-gold transition-colors">
          VERIDIAN
        </NavLink>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `font-label-sm text-[10px] tracking-widest uppercase transition-colors ${
                  isActive ? 'text-accent-gold' : 'text-secondary-cream/70 hover:text-secondary-cream'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-label-sm text-[10px] tracking-widest uppercase transition-colors ${
                  isActive ? 'text-accent-gold' : 'text-secondary-cream/70 hover:text-secondary-cream'
                }`
              }
            >
              About
            </NavLink>
          </nav>

          <button className="hidden md:inline-flex px-4 py-2 border border-accent-gold text-accent-gold font-label-sm text-[10px] tracking-widest hover:bg-accent-gold hover:text-primary-dark transition-all duration-300">
            REQUEST CONSULTATION
          </button>
          <span
            className="material-symbols-outlined text-secondary-cream cursor-pointer md:hidden"
            data-icon="menu"
            onClick={toggleDrawer}
          >
            menu
          </span>
        </div>
      </div>
    </header>
  )
}
