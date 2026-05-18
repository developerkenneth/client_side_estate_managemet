export default function AmenityList({amenity}) {
  return (
    <li className="flex items-center gap-3 text-primary-dark/80 font-body-md">
      <span
        className="material-symbols-outlined text-copper text-lg"
        data-icon="check_circle"
      >
        real_estate_agent
      </span>
      {amenity}
    </li>
  );
}
