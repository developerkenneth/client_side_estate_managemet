import { Link } from "react-router-dom"; // or wherever your Link component comes from

export default function TermsCheckbox({ register, error }) {
  return (
    <>
      <div className="flex items-start justify-start gap-3 py-2">
        <div className="flex h-5 items-center">
          <input
            {...register("terms")}
            id="terms"
            type="checkbox"
            className="
            h-4 w-4 
            cursor-pointer 
            appearance-none 
            border border-outline-variant 
            bg-transparent 
            checked:border-accent-gold 
            checked:bg-accent-gold 
            focus:outline-none 
            focus:ring-1 
            focus:ring-accent-gold/30 
            transition-all 
            duration-200
          "
          />
        </div>

        {/* 
         2. Wrapped the text in a label so clicking the text also toggles the checkbox.
         3. Replaced 'text-yellow-400' with your theme tokens.
      */}
        <label htmlFor="terms" className="cursor-pointer select-none">
          <span className="font-sans text-xs uppercase tracking-widest text-on-surface-variant/70 mr-1">
            I have read and
          </span>
          <Link
            to="#"
            className="font-sans text-xs uppercase tracking-widest text-accent-gold underline underline-offset-4 decoration-accent-gold/30 transition-colors hover:text-accent-gold/80"
          >
            agreed to the terms & conditions
          </Link>
        </label>
      </div>
      {error && <p className="text-xs -mt-8 text-red-400">{error}</p>}
    </>
  );
}
