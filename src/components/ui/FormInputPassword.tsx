import { Eye, EyeOff } from "lucide-react";

export default function FormInputPassword({
  showPassword,
  setShowPassword,
  handleChange,
  value,
  error,
}) {
  return (
    <div className="group relative">
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400 transition-colors group-focus-within:text-yellow-400">
        Password
      </label>

      <input
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder="••••••••"
        onChange={handleChange}
        className="w-full border-0 border-b border-gray-600 bg-transparent py-3 text-lg text-white placeholder:text-gray-600 focus:border-yellow-400 focus:outline-none"
      />

      <button
        type="button"
        onClick={setShowPassword}
        className="absolute bottom-3 right-0 text-gray-500 transition hover:text-yellow-400"
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>

      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
