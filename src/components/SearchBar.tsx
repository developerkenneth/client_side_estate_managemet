export default function SearchBar() {
  return (
    <>
      <div className="relative w-full md:w-96">
        <span
          className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary-dark/60"
          data-icon="search"
        >
          search
        </span>
        <input
          className="w-full pl-10 pr-4 py-3 bg-transparent border-b border-primary-dark/20 focus:border-accent-gold outline-none font-subheading text-subheading transition-colors uppercase placeholder:text-primary-dark/30"
          placeholder="SEARCH BY LOCATION OR ESTATE NAME"
          type="text"
        />
      </div>
    </>
  );
}
