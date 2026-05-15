import PropertyCard from "./PropertyCard";

export default function PropertiesGrid({ properties }) {
  return (
    <>
      {/* <!-- Property Grid --> */}
      <section className="max-w-container-max mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12">
          {properties.length > 0 ? (
            properties.map((property, index) => (
              <PropertyCard property={property} key={index} />
            ))
          ) : (
            <div className="text-center text-primary-dark/70">No properties found.</div>
          )}
        </div>
      </section>
    </>
  );
}
