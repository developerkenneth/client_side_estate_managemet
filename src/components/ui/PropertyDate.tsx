import { readableDate } from "../../utils/formatPrice";

export default function PropertyDate({ date }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-label-sm text-[10px] text-primary-dark/40 uppercase tracking-widest">
        Published
      </span>
      <span className="font-body-md text-xs font-bold tracking-widest text-primary-dark uppercase">
        {readableDate(date)}
      </span>
    </div>
  );
}
