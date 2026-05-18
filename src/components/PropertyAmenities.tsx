import AmenityList from "./AmenityList";

export default function PropertyAmenities({amenities}) {
  return (
    <div className="mb-stack-lg">
      <h3 className="font-headline-md text-primary-dark mb-6 border-b border-primary-dark/10 pb-2">
        AMENITIES
      </h3>
      <ul className="space-y-4">
        {amenities.map((amenity) => {
          <AmenityList amenity={amenity} />;
        })}
      </ul>
    </div>
  );
}
