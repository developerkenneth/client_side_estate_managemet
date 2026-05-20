export default function FormInputText({
  error,
  placeholder,
  title,
  type,
  register,
  inputName
}) {
  const errorState: string = error
    ? "w-full border-0 border-b bg-transparent py-3 text-lg text-white placeholder:text-gray-600 focus:border-yellow-400  focus:outline-none border-[#EF4444]/60"
    : "w-full border-0 border-b bg-transparent py-3 text-lg text-white placeholder:text-gray-600 focus:border-yellow-400  focus:outline-none border-gray-600";

  return (
    <div className="group">
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400 transition-colors group-focus-within:text-yellow-400">
        {title}
      </label>

      <input
        {...register(inputName)}
        type={type}
        placeholder={placeholder}
        className={errorState}
      />
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
