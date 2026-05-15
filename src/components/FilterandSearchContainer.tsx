import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

export default function FilterandSearchContainer() {
  return (
    <section className="sticky top-[72px] z-40 bg-secondary-cream/80 backdrop-blur-md border-b border-primary-dark/10 mb-stack-lg">
      <div className="max-w-container-max mx-auto px-gutter py-stack-sm flex flex-col md:flex-row gap-stack-sm items-center justify-between">
        <SearchBar />
        <FilterBar />
      </div>
    </section>
  );
}
