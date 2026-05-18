export default function FeaturesCard({feature}) {
  return (
    <div className="p-4 bg-white/40 border border-primary-dark/5">
      <span
        className="material-symbols-outlined text-copper mb-2"
        data-icon="bed"
      >
        docs_add_on
      </span>
      <p className="font-label-sm text-[10px] text-primary-dark/60 uppercase">
        {feature}
      </p>
      <p className="font-headline-md text-xl">5 En-suites</p>
    </div>
  );
}
