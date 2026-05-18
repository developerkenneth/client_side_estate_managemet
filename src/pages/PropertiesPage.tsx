import FilterandSearchContainer from "../components/FilterandSearchContainer";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import PropertiesGrid from "../components/PropertiesGrid";
import { useProperties } from "../contexts/PropertiesContext";

export default function PropertiesPage() {
  const { properties, loading } = useProperties();

  if (loading) return <Loading />;
  return (
    <>
      <Hero />
      <FilterandSearchContainer />
      <PropertiesGrid properties={properties} />
    </>
  );
}
