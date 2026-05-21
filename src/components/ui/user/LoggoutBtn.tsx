import { useAuth } from "../../../contexts/auth/authContext";

export default function LoggoutBtn() {
     const {logout}= useAuth();
  return (
    <button onClick={logout} className="nav-link px-4 py-2 border border-accent-gold text-accent-gold text-[10px] hover:bg-accent-gold hover:text-white transition-all">
      LOG OUT
    </button>
  );
}
