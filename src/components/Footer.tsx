const Footer = () => {
  return (
    <footer className="w-full py-10 bg-primary-dark text-secondary-cream border-t border-white/5">
      <div className="px-gutter max-w-container-max mx-auto text-center">
        <h1 className="font-logo text-2xl tracking-tight text-secondary-cream mb-4">VERIDIAN</h1>
        <p className="font-label-sm text-[10px] text-secondary-cream/40 tracking-widest uppercase mb-8">
          © 2024 Veridian Estates. Discretion Assured.
        </p>
        <div className="flex justify-center gap-6">
          <a className="font-label-sm text-[10px] text-secondary-cream/60 hover:text-accent-gold transition-colors tracking-widest uppercase" href="#">
            Privacy
          </a>
          <a className="font-label-sm text-[10px] text-secondary-cream/60 hover:text-accent-gold transition-colors tracking-widest uppercase" href="#">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
