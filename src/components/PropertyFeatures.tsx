import FeaturesCard from "./FeaturesCard";

export default function PropertyFeatures({ features }) {
  return (
    <>
      <div className="mb-stack-lg">
        <h3 className="font-headline-md text-primary-dark mb-6 border-b border-primary-dark/10 pb-2">
          FEATURES
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {/* features property card */}
          {features.map((feature) => {
            <FeaturesCard feature={feature} />;
          })}
        </div>
      </div>
    </>
  );
}
