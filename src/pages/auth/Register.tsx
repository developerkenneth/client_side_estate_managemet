import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas/authSchemas";
import { useState } from "react";
import FormInputText from "../../components/ui/FormInputText";
import FormInputPassword from "../../components/ui/FormInputPassword";
import ParticleBackground from "../../components/ParticleBackground";
import TermsCheckbox from "../../components/ui/TermsCheckBox";
import { toast } from "react-toastify";
import Notify from "../../components/ui/Notify";
import axios from "axios";
import { useAuth } from "../../contexts/auth/authContext";

export default function Register() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const { login, setRefresh } = useAuth();
  const navigate = useNavigate();

  async function handleRegistration(data) {
    const { confirmPassword, terms, ...userData } = data;
    console.log(userData);

    try {
      const response = await axios.post(
        "http://localhost/estate-management-api/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const registrationData = response.data;

      // get tokens from the server
      const tokens = registrationData.tokens;
      const user = registrationData.data;

      // login user
      login(user, tokens.access_token);

      // set refresh token
      setRefresh(tokens.refresh_token);
      toast.success("registration has been completed successfully");

      // reset form
      reset();

      // redirect user
      navigate("/user/dashboard");
    } catch (err) {
      console.error("request failed");

      if (err.response?.data?.message) {
        setRegistrationError(err.response.data.message);
        return;
      }
      setRegistrationError("oops something went wrong please try again");
      return;
    }
  }
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#061417] px-6 py-10 text-white">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoT6KfOy3n1m9WglkU1hfDnf-OgxDf4wVxVUkKK31exwi7LlGpqif--Pb7xKgBrygvTmtRLSO2YN_mI4jefFX6ZVSHWMUAK3kz7FAIyGUTFtMVW3nOENeMwUYk7hGPF2l44m3KYrhx1Oqt75B6UCksVmK2jMdV5ccCYMncw0dObmphrltZbX9vcY2ALVGJGP5MnJbImpt8zWpigwK127Py8GacoUeMVOrIX50z1pvxks7tnsX5lfupyFTLFdbmAtyDkOTBuAfTWMO-"
            alt="Luxury Estate"
            className="h-full w-full object-cover grayscale opacity-30"
          />

          <div className="absolute inset-0 bg-[#061417]/70 backdrop-blur-[2px]" />
        </div>

        {/* Login Form */}
        <section className="relative z-10 w-full max-w-md">
          {/* navigation */}
          <nav className="flex items-center justify-between mb-stack-lg">
            <Link
              className="flex items-center gap-2 text-on-primary/80 hover:text-on-primary transition-colors duration-300 group"
              to="/auth/login"
            >
              <span
                className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1"
                data-icon="arrow_back"
              >
                arrow_back
              </span>
              <span className="font-subheading text-subheading uppercase tracking-widest">
                Back to Login
              </span>
            </Link>
            <div className="w-10 h-10 border border-outline-variant/20 flex items-center justify-center">
              <span className="text-on-primary font-headline-md text-headline-md opacity-20">
                V
              </span>
            </div>
          </nav>

          <header className="mb-stack-md">
            <h1 className="font-headline-xl text-headline-xl mb-stack-sm leading-tight">
              Request Private Access
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/70 max-w-[90%]">
              Veridian Estates is a curated sanctuary for the discerning.
              Membership is granted through a selective application process to
              maintain the integrity of our portfolio.
            </p>
          </header>

          <form
            className="space-y-8"
            onSubmit={handleSubmit(handleRegistration)}
          >
            <div className="mb-6 animate-fade-in">
              {registrationError && (
                <p className="font-body-md text-[#EF4444] text-sm tracking-wide italic text-center">
                  {registrationError}
                </p>
              )}
            </div>

            {/* First name */}

            {
              <FormInputText
                inputName={"first_name"}
                register={register}
                error={errors.first_name?.message}
                type={"text"}
                title={"First Name"}
                placeholder={"Enter your first name"}
              />
            }

            {/* Last Name */}
            {
              <FormInputText
                inputName={"last_name"}
                register={register}
                error={errors.last_name?.message}
                type={"text"}
                title={"Last Name"}
                placeholder={"Enter your last name"}
              />
            }

            {/* Username */}
            {
              <FormInputText
                inputName={"username"}
                register={register}
                error={errors.username?.message}
                type={"text"}
                title={"Username"}
                placeholder={"Enter your username"}
              />
            }

            {/* Email */}
            {
              <FormInputText
                inputName={"email"}
                register={register}
                error={errors.email?.message}
                type={"email"}
                title={"Email"}
                placeholder={"Enter your email"}
              />
            }

            {
              /* Password */
              <FormInputPassword
                showPassword={showPassword}
                setShowPassword={() => setShowPassword((prev) => !prev)}
                register={register}
                inputName={"password"}
                label={"Password"}
                error={errors.password?.message}
              />
            }

            {
              /* Password */
              <FormInputPassword
                showPassword={showPassword}
                setShowPassword={() => setShowPassword((prev) => !prev)}
                register={register}
                inputName={"confirmPassword"}
                label={"Confirm Password"}
                error={errors.confirmPassword?.message}
              />
            }

            <TermsCheckbox register={register} error={errors.terms?.message} />

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 py-5 text-sm  mb-6 font-semibold uppercase tracking-[0.2em] text-[#061417] shadow-lg shadow-yellow-400/10 transition-all duration-500 hover:bg-white active:scale-[0.98]"
            >
              {isSubmitting ? "please wait..." : "Register"}
            </button>
          </form>
        </section>

        {/* Footer */}
        <div className="relative z-10 pb-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-gray-700" />

            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Inquiry
            </span>

            <span className="h-px w-8 bg-gray-700" />
          </div>

          <Link
            to="#"
            className="border-b border-white/20 pb-1 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
          >
            Have an account already ? Login
          </Link>
        </div>
        <ParticleBackground />
      </div>

      {/* toatify notifier */}
      <Notify />
    </>
  );
}
