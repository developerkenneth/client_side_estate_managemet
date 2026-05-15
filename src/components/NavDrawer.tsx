import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export default function NavDrawer() {
  const context = useContext(AppContext)
  if (!context) throw new Error('NavDrawer must be used within AppProvider')

  const { isDrawerOpen, toggleDrawer } = context

  return (
    <>
      {/* <!-- Drawer Overlay --> */}
      <div
        className={`fixed inset-0 bg-black/50 z-60 ${isDrawerOpen ? '' : 'hidden'}`}
        id="drawer-overlay"
        onClick={toggleDrawer}
      ></div>

      {/* <!-- Navigation Drawer --> */}
      <nav
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-primary-dark z-[70] transform transition-transform duration-300 ease-in-out flex flex-col p-8 ${
          isDrawerOpen ? '' : 'translate-x-full'
        }`}
        id="nav-drawer"
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-logo text-2xl text-secondary-cream tracking-tight">VERIDIAN</h2>
          <button className="text-secondary-cream p-2" onClick={toggleDrawer}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <div className="flex flex-col gap-8">
          <a className="font-label-sm text-sm text-secondary-cream/90 hover:text-accent-gold transition-colors tracking-[0.3em] uppercase" href="#">
            Portfolio
          </a>
          <a className="font-label-sm text-sm text-secondary-cream/90 hover:text-accent-gold transition-colors tracking-[0.3em] uppercase" href="#">
            Services
          </a>
          <a className="font-label-sm text-sm text-secondary-cream/90 hover:text-accent-gold transition-colors tracking-[0.3em] uppercase" href="#">
            About
          </a>
          <a className="font-label-sm text-sm text-secondary-cream/90 hover:text-accent-gold transition-colors tracking-[0.3em] uppercase" href="#">
            Log In
          </a>
        </div>
        <div className="mt-auto">
          <button className="w-full py-4 border border-accent-gold text-accent-gold font-label-sm text-xs tracking-[0.2em] hover:bg-accent-gold hover:text-primary-dark transition-all duration-300">
            REQUEST CONSULTATION
          </button>
        </div>
      </nav>
    </>
  )
}