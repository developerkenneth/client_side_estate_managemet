import AuthHeader from "../components/ui/user/AuthHeader";
import "../assets/css/user.css";
import { Outlet } from "react-router-dom";
import UserSideBar from "../components/ui/user/UserSideBar";

export default function UserLayout() {
  return (
    <div className="bg-secondary-cream text-on-surface min-h-screen flex flex-col">
      <AuthHeader />
      <div className="flex flex-1 pt-[70px]">
        
        {/* <!-- Mobile Menu Toggle (Checkbox Hack) --> */}
        <input className="hidden" id="mobile-menu-checkbox" type="checkbox" />
              <UserSideBar />

        <Outlet />
      </div>
    </div>
  );
}
