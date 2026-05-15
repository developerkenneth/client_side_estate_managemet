export default function BottomNav() {
  return (
    // <!-- Bottom Navigation (Mobile) -->
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-gutter pb-6 pt-4 bg-primary-dark text-secondary-cream/60 border-t border-white/5 z-50">
      <div className="flex flex-col items-center text-accent-gold">
        <span className="material-symbols-outlined" data-icon="domain">
          domain
        </span>
        <span className="font-label-sm text-[10px] tracking-widest uppercase mt-1">
          Estates
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined" data-icon="dashboard">
          dashboard
        </span>
        <span className="font-label-sm text-[10px] tracking-widest uppercase mt-1">
          Dash
        </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined" data-icon="luxury_delivery">
          delivery_dining
        </span>
        <span className="font-label-sm text-[10px] tracking-widest uppercase mt-1">
          Concierge
        </span>
      </div>
    </nav>
  );
}
