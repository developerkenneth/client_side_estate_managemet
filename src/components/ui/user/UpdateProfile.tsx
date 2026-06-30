import React from "react";
import { UploadPhoto } from "./UploadPhoto";
import { VerficationCard } from "./VerficationCard";

export const UpdateProfile = () => {
  return (
    <div>
      {/* profile picture link */}
      <UploadPhoto />
      <VerficationCard />
    </div>
  );
};
