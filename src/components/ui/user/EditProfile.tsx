import React from "react";
import { UpdateForm } from "./UpdateForm";
import { UpdateProfile } from "./UpdateProfile";

export const EditProfile = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full ">
      {/* grid for profile change */}

      {/* update form component */}
      <UpdateForm />

      {/* update profile picture /  verification link */}
      <UpdateProfile />
    </div>
  );
};
