import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import photo from "../assets/images/property.jpg";

export default function PropertyCard({ property }) {
        const parsedPhoto = JSON.parse(property.photos);
        const propertyPhoto = parsedPhoto[0] ? `http://localhost/estate-management-api/uploads/properties/${parsedPhoto[0]}`: photo;
  return (
    <>
      <article className="flex flex-col bg-secondary-cream group">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <img
            alt="The Obsidian Pavilion"
            className="w-full h-full object-cover grayscale-[20%] brightness-[85%] group-hover:scale-105 transition-transform duration-700"
            src={propertyPhoto}
          />
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
            <p className="font-bold text-2xl text-white sans-font mb-1">
              {formatPrice(property.price)}
            </p>
            <h3 className="font-headline-md text-white text-lg">
              {property.name}
            </h3>
          </div>
        </div>
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-primary-dark/60">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="square_foot"
              >
                square_foot
              </span>
              <span className="text-[10px] tracking-widest uppercase sans-font font-medium">
                12,400 SQ FT
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="bed"
              >
                bed
              </span>
              <span className="text-[10px] tracking-widest uppercase sans-font font-medium">
                7 BEDS
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="bathtub"
              >
                bathtub
              </span>
              <span className="text-[10px] tracking-widest uppercase sans-font font-medium">
                9 BATHS
              </span>
            </div>
          </div>
          <Link to={`properties/${property.uuid}`} className="w-full md:w-auto px-10 py-3 border border-accent-gold text-accent-gold text-[10px] font-medium tracking-[0.2em] hover:bg-accent-gold hover:text-white transition-all uppercase">
            VIEW DETAILS
          </Link>
        </div>
      </article>
    </>
  );
}
