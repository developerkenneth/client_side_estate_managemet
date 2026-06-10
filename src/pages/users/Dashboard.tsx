import { useEffect, useState } from "react";
import { axiosAuth } from "../../utils/axiosAuth";
import { useAuth } from "../../contexts/auth/authContext";
import { toast } from "react-toastify";
import Notify from "../../components/ui/Notify";
import Loading from "../../components/Loading";
import SummaryCard from "../../components/ui/user/SummaryCard";

export default function Dashboard() {
  // get user
  const { user } = useAuth();
  // get user ID
  const userId = user?.id;
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // fetch user properties
  useEffect(() => {
    const getProperties = async () => {
      try {
        const response = await axiosAuth.get(`properties?user_id=${userId}`);
        const allProperties = response.data?.data;
        setProperties(allProperties);
        return;
      } catch (error) {
        console.error(error);
        setError(true);
        return;
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, []);

  if (error) {
    toast.error("oops failed to get user properties. please try again");
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {/* <!-- Main Content Area --> */}
      <main className="flex-1 px-4 md:px-margin-edge py-12 max-w-full overflow-x-hidden relative">
        {/* <!-- Welcome Header --> */}
        <div className="mb-12">
          <h2 className="font-display text-[44px] leading-tight text-primary-dark">
            Portfolio Overview
          </h2>
          <div className="h-px w-24 bg-accent-gold mt-4"></div>
        </div>
        {/* <!-- Summary Cards --> */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* cards */}
          {properties && (
            <SummaryCard
              cardTitle={"Your Properties"}
              detail={properties.length}
            />
          )}
          <div className="bg-white p-8 border-l-4 border-primary-dark shadow-sm">
            <p className="nav-link text-[10px] text-secondary mb-2 uppercase">
              Total Value
            </p>
            <h3 className="font-display text-[32px] text-primary-dark">$15M</h3>
          </div>
          <div className="bg-white p-8 border-l-4 border-primary-dark shadow-sm">
            <p className="nav-link text-[10px] text-secondary mb-2 uppercase">
              Maintenance Requests
            </p>
            <h3 className="font-display text-[32px] text-primary-dark">0</h3>
          </div>
        </section>
        {/* <!-- My Properties Section --> */}
        <section className="mb-16">
          <div className="flex justify-between items-baseline mb-8">
            <h3 className="font-display text-[28px] text-primary-dark">
              My Properties
            </h3>
            <a className="nav-link text-accent-gold hover:opacity-70" href="#">
              VIEW GALLERY
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <!-- Property Card 1 --> */}
            <div className="group bg-white overflow-hidden border border-outline-variant/10 hover:shadow-lg transition-all duration-500 cursor-pointer">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  alt="Blackwood Manor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-GSS3zLoZcvB7-FDjtpdMV_znx-jyfPcnNXwtk-bosuhYMpzXBwAGkbgEjjaqeX000wfVfslEEzKrzs22THRQbANfQWBYX1_Yfa6CH58rel64zZ6dq8BCb-ih6BMtxVxyS4twdZIZ9p9AP7w1R0O935MyHqTHmiEYnVHCtVhS-WrB01It5W3mItIlQx2EFa212j_7YeJAhwvK9apNhh9S7NU7Bk9A6jZ6gVpAilKtd9_yINTgz56GDVJrO7xSnNjA_jBZJDYY6_hZ"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 border border-accent-gold">
                  <span className="nav-link text-[9px] text-accent-gold">
                    MANAGED
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-[22px] mb-1">
                  Blackwood Manor
                </h4>
                <p className="text-[13px] text-secondary">
                  Oxfordshire, UK • Primary Residence
                </p>
              </div>
            </div>
            {/* <!-- Property Card 2 --> */}
            <div className="group bg-white overflow-hidden border border-outline-variant/10 hover:shadow-lg transition-all duration-500 cursor-pointer">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  alt="Seaside Villa"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0CM7HoXObtyC7RegkEcw5Aqs4_M1bd8QEIy6rhcSKoGQI8tUdKUMCiYeomhxFeTBTprfvRHrL8BFgO0APnDAaNSnCLLyjvLCZZodV6CLNLwa8o42-TbD93QYglSF8n_xFogczI6vh-bKfDgzfFtrq9qwhZ5-aU2MnJ9JpM1Mi3IQ9RrDtjCEEr627XZAclniIu4okJsYtOXDZ2-emXG8G6OZROyZhHYMtlJMxPmOqZScsxPJtEg2cBr2n5PudqrzNuWL41RmsRs48"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 border border-accent-gold">
                  <span className="nav-link text-[9px] text-accent-gold">
                    MANAGED
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-[22px] mb-1">
                  Azure Sands Villa
                </h4>
                <p className="text-[13px] text-secondary">
                  Amalfi Coast, IT • Vacation Rental
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Documents Table --> */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary-dark">
              description
            </span>
            <h3 className="font-display text-[28px] text-primary-dark">
              Critical Documents
            </h3>
          </div>
          <div className="bg-white border border-outline-variant/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-outline-variant/10 bg-surface-container-low/50">
                    <th className="p-6 nav-link text-[10px] text-secondary">
                      DOCUMENT NAME
                    </th>
                    <th className="p-6 nav-link text-[10px] text-secondary">
                      TYPE
                    </th>
                    <th className="p-6 nav-link text-[10px] text-secondary text-right">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  <tr className="hover:bg-surface-container-low/30 transition-colors cursor-pointer group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-slate-silver">
                          contract
                        </span>
                        <span className="text-[14px] font-medium text-primary-dark">
                          Lease Agreement
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-[13px] text-secondary">
                      Legal PDF
                    </td>
                    <td className="p-6 text-right">
                      <span className="material-symbols-outlined text-accent-gold text-[20px] opacity-0 group-hover:opacity-100 transition-opacity">
                        download
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low/30 transition-colors cursor-pointer group">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-slate-silver">
                          gavel
                        </span>
                        <span className="text-[14px] font-medium text-primary-dark">
                          HOA Guidelines
                        </span>
                      </div>
                    </td>
                    <td className="p-6 text-[13px] text-secondary">
                      Compliance
                    </td>
                    <td className="p-6 text-right">
                      <span className="material-symbols-outlined text-accent-gold text-[20px] opacity-0 group-hover:opacity-100 transition-opacity">
                        download
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* <!-- Floating CTA --> */}
        <button className="fixed bottom-8 right-8 bg-warm-copper text-white px-8 py-5 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all z-50 group">
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">
            headset_mic
          </span>
          <span className="nav-link text-[12px] tracking-[0.1em]">
            CONTACT MY MANAGER
          </span>
        </button>
      </main>
      <Notify />
    </>
  );
}
