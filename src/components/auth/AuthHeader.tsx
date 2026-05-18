export default function AuthHeader() {
  return (
    <header className="fixed top-0 w-full h-[70px] z-50 bg-primary-dark border-b border-white/10">
      <div className="flex justify-between items-center px-4 md:px-margin-edge w-full max-w-container-max mx-auto h-full">
        <div className="flex items-center">
          <h1 className="font-display text-[22px] tracking-[0.25em] text-white uppercase">
            Veridian
          </h1>
        </div>
        <div className="md:hidden">
          <label className="cursor-pointer" htmlFor="mobile-menu-checkbox">
            <span className="material-symbols-outlined text-white">menu</span>
          </label>
        </div>
        <nav className="hidden md:flex items-center gap-nav-spacing">
          <div className="flex items-center gap-2 text-white/70">
            <span className="material-symbols-outlined text-[20px]">
              notifications
            </span>
            <span className="nav-link text-[10px]">ALERTS (0)</span>
          </div>
          <button className="nav-link px-4 py-2 border border-accent-gold text-accent-gold text-[10px] hover:bg-accent-gold hover:text-white transition-all">
            LOG OUT
          </button>
        </nav>
      </div>
    </header>
  );
}
