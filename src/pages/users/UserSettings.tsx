import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EditProfile } from "../../components/ui/user/EditProfile";

export const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // A quick array to map out our tabs cleanly
  const tabs = [
    { id: "profile", label: "GENERAL INFORMATION" },
    { id: "password", label: "PASSWORD SETTINGS" },
    { id: "other", label: "THEME SETTINGS" },
  ];

  return (
    <div className="w-full mx-auto p-4 px-10 border">
      <div className="flex flex-row justify-between">
        <div className="p-2">
          <h1 className="font-bold text-gray-800 text-3xl">Settings</h1>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-row gap-6 my-4 border-b border-gray-200 relative pb-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`font-bold text-sm cursor-pointer relative py-1 transition-colors duration-200 ${
                isActive ? "text-gray-950" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}

              {/* SLIDING UNDERLINE EFFECT */}
              {isActive && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-[-9px] left-0 right-0 h-[2px] bg-gray-950"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* CONTENT FADE-IN EFFECT */}
      <div className="py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Crucial! Tells React to re-animate when the key changes
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {activeTab === "profile" && <EditProfile />}
            {/* {activeTab === "password" && <EditPassword />} */}
            {/* {activeTab === "other" && <ThemeSettings />} */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
