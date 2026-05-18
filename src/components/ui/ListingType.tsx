export default function ListingType({ type }) {
  return (
    <>
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-[10px] text-primary-dark/40 uppercase tracking-widest">
          Listing Type
        </span>
        <span className="font-body-md text-xs font-bold tracking-widest text-primary-dark uppercase">
          {type.toUpperCase()}
        </span>
      </div>
      <div className="w-px h-8 bg-primary-dark/10 hidden sm:block"></div>
    </>
  );
}
