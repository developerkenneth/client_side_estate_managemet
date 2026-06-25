import { useEffect, useState } from "react";
import { axiosAuth } from "../../utils/axiosAuth";
import { useAuth } from "../../contexts/auth/authContext";
import { property } from "zod";

export default function UserProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { user } = useAuth();
  const userId = user?.id;

  useEffect(() => {
    if (!userId) return;

    const fetchProperties = async () => {
      try {
        const response = await axiosAuth.get(`/properties?user_id=${userId}`);
        const fetchedProperties = response.data.data;
        setProperties(fetchedProperties);
      } catch (err) {
        console.error(err.response?.data);
        if (err.response.data) {
          setError(err.response.data.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [userId]);

  return (
    <>
      {/* Properties Grid */}
      <section className="px-4 md:px-margin-edge py-gutter max-w-container-max mx-auto">
        <div className="flex justify-between items-baseline mb-8">
          <h3 className="font-display text-[28px] text-primary-dark">
            My Properties
          </h3>
          <a className="nav-link text-accent-gold hover:opacity-70" href="#">
            VIEW GALLERY
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.length > 0 ? (
            properties.map((property, index) => (
              <div
                key={index}
                className="group bg-white overflow-hidden border border-outline-variant/10 property-card-hover"
              >
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    alt="The Obsidian Manor"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjZiNRpU1PmMxnT9XPXefUBjuP6L5CfLmq1hlOwAeNBTg_2eYe7NcijvCtIVkT0KwHK-jzeTbm5fI0U0ILFwH48-GrudiTu-qN9tH-rKeipeJTUue7ousqilnka1Kl9YYWQwIsyroZKjdM6Cx70xI8XAKmdojxilJWiIPYONARXAUMMMKwp9nXu5TBWqqoq6k_BQEGDPCyUdglv_0LU0JiI8Y5-mywRDZVbMcqlb3Rrc-env-frIkdSGYdNx6kUm7xFBAm4EehnSZq"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 border border-accent-gold">
                    <span className="nav-link text-[9px] text-accent-gold">
                      MANAGED
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="font-display text-[24px] mb-1">
                    {property?.name}
                  </h4>
                  <p className="text-[13px] text-secondary mb-6">
                    {property?.location}
                  </p>
                  <button className="w-full py-4 bg-warm-copper text-white nav-link text-[11px] tracking-[0.1em] hover:bg-[#7D5E53] transition-colors flex items-center justify-center gap-2 uppercase">
                    <span className="material-symbols-outlined text-[18px]">
                      concierge
                    </span>
                    View Property
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>no properties found</p>
          )}
        </div>
      </section>
    </>
  );
}
