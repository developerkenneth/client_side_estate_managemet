import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import { fetchProperty } from "../utils/property";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import NotFound from "./NotFound";
import Loading from "../components/Loading";
import { Features } from "tailwindcss";
import PropertyFeatures from "../components/PropertyFeatures";
import PropertyAmenities from "../components/PropertyAmenities";
import ListingType from "../components/ui/ListingType";
import PropertyStatus from "../components/ui/PropertyStatus";
import PropertyDate from "../components/ui/PropertyDate";

const Property = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState([]);
  const [propertyImages, setPropertyImages] = useState([]);
  const [features, setFeatures] = useState([]);
  const [amenities, setAmenities] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProperty() {
      try {
        const data = await fetchProperty(id);

        let parsedPhotos = data.photos ? JSON.parse(data.photos) : [];
        parsedPhotos = parsedPhotos.map((photo) => {
          return `http://localhost/estate-management-api/uploads/properties/${photo}`;
        });

        const features = data.features ? JSON.parse(data.features) : [];
        const amenities = data.amenities ? JSON.parse(data.amenities) : [];
        setFeatures(features);
        setAmenities(amenities);

        setProperty(data);
        setPropertyImages(parsedPhotos);
        return;
      } catch (error) {
        console.error(`Fetched error:${error}`);
        setError(error.message);
        return;
      } finally {
        setLoading(false);
      }
    }
    getProperty();
  }, [id]);

  if (loading) return <Loading />;

  if (!property)
    return (
      <div>
        <NotFound />
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Opps something went wrong: {error}</h1>
      </div>
    );

  return (
    <div>
      <Hero images={propertyImages} description={property.name} />

      <section className="bg-secondary-cream px-gutter py-stack-md -mt-10 relative z-10 rounded-t-3xl shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-2 mb-stack-md">
            <span className="font-subheading text-accent-gold uppercase tracking-[0.25em] text-[10px]">
              EXCLUSIVE RESIDENCE
            </span>
            <h2 className="font-headline-xl text-primary-dark">
              {property.name}
            </h2>
            <p className="font-sans font-bold text-2xl text-primary-dark mt-2">
              {formatPrice(property.price)}
            </p>
          </div>

          {/* listing details */}

          <div className="flex flex-wrap gap-4 mb-stack-md border-y border-primary-dark/10 py-4">
              <ListingType type={property.listing_type} />
              <PropertyStatus staus={property.statis} />
              <PropertyDate date={property.created_at} />
          </div>
          <button className="w-full bg-copper text-white py-5 rounded-soft font-subheading text-subheading tracking-[0.1em] hover:brightness-110 transition-all shadow-lg mb-stack-lg">
            SCHEDULE PRIVATE VIEWING
          </button>
          <div className="space-y-4 mb-stack-lg">
            <p className="font-body-md text-primary-dark/80 leading-relaxed">
              {property.description}
            </p>
          </div>

          {features.length > 0 ? (
            <PropertyFeatures features={features} />
          ) : (
            <p className="text-sm text-primary-dark/40 my-10">
              No features specified for this property.
            </p>
          )}

           {amenities.length > 0 ? (
            <PropertyAmenities amenities={amenities} />
          ) : (
            <p className="text-sm text-primary-dark/40 my-10">
              No amenities specified for this property.
            </p>
          )}

        </div>
      </section>

      <section className="w-full h-[300px] bg-map-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply">
          <img
            alt="Stylized map background"
            className="w-full h-full object-cover grayscale contrast-150"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6JnjgBtQzcQQRmzK9rFkCPQHXndzw-VxuDlLoasovUl8W-heTOobYvvL8cGuHTBq7b47hB7rHjwzwT-u6payiBQnU_InpiPvyeSrATfxlNgHZPKIKSNgthbqToI9U7NIIKLARAQTT1YFCJNlVORyXp2zi8wFg-u_mArhLTtVtBtOuaR_kzY2nlciKdFmdEy3toavmQ59pmgK8pncPqJgR-g6CgySSITmbd_1Js5dlXqovD9bOdpRf7DCiigKymgrTzYxfpdWSYwWr"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-primary-dark text-white p-3 rounded-full shadow-2xl">
            <span
              className="material-symbols-outlined text-accent-gold"
              data-icon="location_on"
            >
              location_on
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 p-4 shadow-lg border border-primary-dark/5 max-w-[200px]">
          <p className="font-subheading text-[10px] text-copper uppercase mb-1">
            LOCATION
          </p>
          <p className="font-body-md text-xs text-primary-dark">
            {property.location}
          </p>
        </div>
      </section>

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
          <span
            className="material-symbols-outlined"
            data-icon="luxury_delivery"
          >
            delivery_dining
          </span>
          <span className="font-label-sm text-[10px] tracking-widest uppercase mt-1">
            Concierge
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Property;
