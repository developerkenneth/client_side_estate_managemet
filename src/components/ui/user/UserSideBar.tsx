import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/auth/authContext";


export default function UserSideBar() {
    const {user} = useAuth();
    
  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-midnight-navy text-white transition-transform -translate-x-full md:translate-x-0 md:static md:inset-0 border-r border-white/5 flex flex-col pt-4">
      {/* <!-- Profile Section --> */}
      <div className="px-8 py-8 flex flex-col items-center border-b border-white/10 mb-6">
        <Link to="user/profile" className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-accent-gold/30 p-1">
          <img
            alt="Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0CM7HoXObtyC7RegkEcw5Aqs4_M1bd8QEIy6rhcSKoGQI8tUdKUMCiYeomhxFeTBTprfvRHrL8BFgO0APnDAaNSnCLLyjvLCZZodV6CLNLwa8o42-TbD93QYglSF8n_xFogczI6vh-bKfDgzfFtrq9qwhZ5-aU2MnJ9JpM1Mi3IQ9RrDtjCEEr627XZAclniIu4okJsYtOXDZ2-emXG8G6OZROyZhHYMtlJMxPmOqZScsxPJtEg2cBr2n5PudqrzNuWL41RmsRs48"
          />
        </Link>
        <p className="nav-link text-[10px] text-accent-gold">WELCOME BACK</p>
        <p className="font-display text-[18px]">{user.first_name}</p>
      </div>
      <nav className="flex flex-col px-4 gap-2">
        <Link
          className="flex items-center gap-4 p-3 text-white bg-white/5 border-l-2 border-accent-gold transition-all"
          to="/user/dashboard"
        >
          <span className="material-symbols-outlined text-[20px]">
            grid_view
          </span>
          <span className="nav-link text-[11px]">OVERVIEW</span>
        </Link>


        <Link
          className="flex items-center gap-4 p-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
          to="/user/properties"
        >
          <span className="material-symbols-outlined text-[20px]">
            apartment
          </span>
          <span className="nav-link text-[11px]">MY PROPERTIES</span>
        </Link>
        <Link
          className="flex items-center gap-4 p-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
          to="/user/messages"
        >
          <span className="material-symbols-outlined text-[20px]">
            chat_bubble_outline
          </span>
          <span className="nav-link text-[11px]">MESSAGES</span>
        </Link>
        <Link
          className="flex items-center gap-4 p-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
          to="/user/documents"
        >
          <span className="material-symbols-outlined text-[20px]">
            folder_open
          </span>
          <span className="nav-link text-[11px]">DOCUMENTS</span>
        </Link>
        <Link
          className="flex items-center gap-4 p-3 text-white/60 hover:text-white hover:bg-white/5 transition-all"
          to="/user/settings"
        >
          <span className="material-symbols-outlined text-[20px]">
            settings
          </span>
          <span className="nav-link text-[11px]">SETTINGS</span>
        </Link>
      </nav>
      <div className="mt-auto p-8 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] nav-link text-white/40">
            {user.role?.toUpperCase()} ONLINE
          </span>
        </div>
      </div>
    </aside>
  );
}
