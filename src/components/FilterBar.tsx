import { useState } from "react";
import { useProperties } from "../contexts/PropertiesContext";

const priceOptions = [
  { label: "Any", value: "" },
  { label: "100K", value: "100000" },
  { label: "200K", value: "200000" },
  { label: "300K", value: "300000" },
  { label: "500K", value: "500000" },
];

export default function FilterBar() {
  const { properties, filters, updateFilter, resetFilters } = useProperties();
  const [openMenu, setOpenMenu] = useState<"location" | "type" | "price" | "">(
    "",
  );

  const locationOptions = Array.from(
    new Set(
      properties
        .map((property) => property.location)
        .filter((value): value is string => Boolean(value)),
    ),
  );

  const typeOptions = Array.from(
    new Set(
      properties
        .map((property) => property.type)
        .filter((value): value is string => Boolean(value)),
    ),
  );

  const handleChange = (name: keyof typeof filters, value: string) => {
    updateFilter(name, value);
    setOpenMenu("");
  };

  return (
    /* Added z-50 and isolation to ensure dropdowns stay on top of main content */
    <section className="sticky top-18 z-50 bg-secondary-cream border-y border-primary-dark/10 isolate">
      {/* 
          FIX: Removed overflow-x-auto which clips dropdowns.
          If you need mobile scrolling, use overflow-x-visible or a different wrapper.
      */}
      <div className="max-w-container-max mx-auto px-6 py-4 flex items-center justify-between gap-8 whitespace-nowrap">
        <div className="relative overflow-visible">
          <button
            type="button"
            onClick={() =>
              setOpenMenu(openMenu === "location" ? "" : "location")
            }
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-primary-dark font-medium uppercase"
          >
            {filters.location ? `LOCATION • ${filters.location}` : "LOCATION"}
            <span className="material-symbols-outlined text-sm">
              expand_more
            </span>
          </button>

          {openMenu === "location" && (
            <div className="absolute left-0 mt-3 w-52 rounded-2xl border border-primary-dark/10 bg-white p-3 shadow-xl z-60">
              <button
                type="button"
                onClick={() => handleChange("location", "")}
                className="block w-full text-left px-3 py-2 text-sm text-primary-dark hover:bg-secondary-cream rounded-xl"
              >
                All locations
              </button>
              {locationOptions.map((location) => (
                <button
                  key={location}
                  type="button"
                  onClick={() => handleChange("location", location)}
                  className="block w-full text-left px-3 py-2 text-sm text-primary-dark hover:bg-secondary-cream rounded-xl"
                >
                  {location}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative overflow-visible">
          <button
            type="button"
            onClick={() => setOpenMenu(openMenu === "type" ? "" : "type")}
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-primary-dark font-medium uppercase"
          >
            {filters.type ? `TYPE • ${filters.type}` : "PROPERTY TYPE"}
            <span className="material-symbols-outlined text-sm">
              expand_more
            </span>
          </button>

          {openMenu === "type" && (
            <div className="absolute left-0 mt-3 w-52 rounded-2xl border border-primary-dark/10 bg-white p-3 shadow-xl z-60">
              <button
                type="button"
                onClick={() => handleChange("type", "")}
                className="block w-full text-left px-3 py-2 text-sm text-primary-dark hover:bg-secondary-cream rounded-xl"
              >
                All types
              </button>
              {typeOptions.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange("type", type)}
                  className="block w-full text-left px-3 py-2 text-sm text-primary-dark hover:bg-secondary-cream rounded-xl"
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative overflow-visible">
          <button
            type="button"
            onClick={() => setOpenMenu(openMenu === "price" ? "" : "price")}
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-primary-dark font-medium uppercase"
          >
            {filters.max_price
              ? `MAX PRICE • ${filters.max_price}`
              : "MAX PRICE"}
            <span className="material-symbols-outlined text-sm">
              expand_more
            </span>
          </button>

          {openMenu === "price" && (
            <div className="absolute left-0 mt-3 w-52 rounded-2xl border border-primary-dark/10 bg-white p-3 shadow-xl z-60">
              {priceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleChange("max_price", option.value)}
                  className="block w-full text-left px-3 py-2 text-sm text-primary-dark hover:bg-secondary-cream rounded-xl"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:block grow border-t border-primary-dark/5 mx-4"></div>

        <button
          type="button"
          onClick={() => {
            resetFilters();
            setOpenMenu("");
          }}
          className="material-symbols-outlined text-primary-dark/60 hover:text-primary-dark"
        >
          tune
        </button>
      </div>
    </section>
  );
}
