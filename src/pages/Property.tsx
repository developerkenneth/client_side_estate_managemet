import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import { fetchProperty } from "../utils/property";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrice";
import NotFound from "./NotFound";
import Loading from "../components/Loading";

const Property = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState([]);
  const [propertyImages, setPropertyImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProperty() {
      try {
        const data = await fetchProperty(id);
        let parsedPhotos = data.photos ? JSON.parse(data.photos) : [];
        parsedPhotos = parsedPhotos.map(photo =>{
              return `http://localhost/estate-management-api/uploads/properties/${photo}`;
        })
        
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

  if (loading)
    return (
      <Loading />
    );

  if (!property)
    return (
      <div>
        <NotFound />
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
          <button className="w-full bg-copper text-white py-5 rounded-soft font-subheading text-subheading tracking-[0.1em] hover:brightness-110 transition-all shadow-lg mb-stack-lg">
            SCHEDULE PRIVATE VIEWING
          </button>
          <div className="space-y-4 mb-stack-lg">
            <p className="font-body-md text-primary-dark/80 leading-relaxed">
              {property.description}
            </p>
          </div>
          <div className="mb-stack-lg">
            <h3 className="font-headline-md text-primary-dark mb-6 border-b border-primary-dark/10 pb-2">
              FEATURES
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/40 border border-primary-dark/5">
                <span
                  className="material-symbols-outlined text-copper mb-2"
                  data-icon="bed"
                >
                  bed
                </span>
                <p className="font-label-sm text-[10px] text-primary-dark/60 uppercase">
                  Bedrooms
                </p>
                <p className="font-headline-md text-xl">5 En-suites</p>
              </div>
              <div className="p-4 bg-white/40 border border-primary-dark/5">
                <span
                  className="material-symbols-outlined text-copper mb-2"
                  data-icon="square_foot"
                >
                  square_foot
                </span>
                <p className="font-label-sm text-[10px] text-primary-dark/60 uppercase">
                  Living Space
                </p>
                <p className="font-headline-md text-xl">8,400 SQ FT</p>
              </div>
            </div>
          </div>
          <div className="mb-stack-lg">
            <h3 className="font-headline-md text-primary-dark mb-6 border-b border-primary-dark/10 pb-2">
              AMENITIES
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-primary-dark/80 font-body-md">
                <span
                  className="material-symbols-outlined text-copper text-lg"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
                Custom Wine Cellar (1,200 bottles)
              </li>
              <li className="flex items-center gap-3 text-primary-dark/80 font-body-md">
                <span
                  className="material-symbols-outlined text-copper text-lg"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
                Heated Limestone Terrace
              </li>
              <li className="flex items-center gap-3 text-primary-dark/80 font-body-md">
                <span
                  className="material-symbols-outlined text-copper text-lg"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
                Private Wellness Wing
              </li>
            </ul>
          </div>
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
