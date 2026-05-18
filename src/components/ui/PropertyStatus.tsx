export default function PropertyStatus({ staus }) {
  function getColor(status:string) {
    switch (status) {
      case "available":
        return "w-1.5 h-1.5 rounded-full bg-green-500";
        break;
      case "reserved":
        return "w-1.5 h-1.5 rounded-full bg-accent-gold";
        break;
      case "off_market":
        return "w-1.5 h-1.5 rounded-full bg-red-500";
        break;
      case "occupied":
        return "w-1.5 h-1.5 rounded-full bg-red-300";
        break;
    }
  }
  return (
    <>
      <div className="flex flex-col gap-1">
        <span className="font-label-sm text-[10px] text-primary-dark/40 uppercase tracking-widest">
          Listing Status
        </span>
        <div className="flex items-center gap-1.5">
          <span className={getColor(staus)}></span>
          <span className="font-body-md text-xs font-bold tracking-widest text-primary-dark uppercase">
            ACTIVE
          </span>
        </div>
      </div>
      <div className="w-px h-8 bg-primary-dark/10 hidden sm:block"></div>
    </>
  );
}
