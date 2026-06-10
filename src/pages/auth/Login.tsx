import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticleBackground from "../../components/ParticleBackground";
import FormInputText from "../../components/ui/FormInputText";
import FormInputPassword from "../../components/ui/FormInputPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/authSchemas";
import { useAuth } from "../../contexts/auth/authContext";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  // redirect user to dashboard if already logged in
  if (isAuthenticated) {
    navigate("/user/dashboard");
  }

  async function handleForm(data) {
    //  login user
    try {
      const response = await axios.post(
        "http://localhost/estate-management-api/api/auth/login",
        data,
      );
      const responseData = response.data;

      const tokens = responseData?.tokens;

      const userData = responseData?.data;

      if (!tokens || !userData) {
        setLoginError("Invalid server response");
        return;
      }

      login(userData, JSON.stringify(tokens));
      navigate("/user/dashboard", {
        replace: true,
      });
      reset();
    } catch (err) {
      console.error("failed request");
      if (err.response) {
        const message =
          err?.response?.data?.message || "Invalid email or password";
        setLoginError(message);
        // stopped here
      }
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

        {/* Header */}
        <header className="relative z-10 mt-10 text-center">
          <h1 className="text-4xl font-light tracking-[0.3em]">VERIDIAN</h1>

          <p className="mt-2 text-sm tracking-[0.25em] text-yellow-400">
            ESTATES
          </p>
        </header>

        {/* Login Form */}
        <section className="relative z-10 w-full max-w-md">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold">Welcome Back</h2>

            <p className="mt-2 text-sm text-gray-400">Access your dashboard</p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit(handleForm)}>
            <div className="mb-6 animate-fade-in">
              {loginError && (
                <p className="font-body-md text-[#EF4444] text-sm tracking-wide italic text-center">
                  {loginError}
                </p>
              )}
            </div>

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

            {/* Forgot */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm tracking-wide text-yellow-400 transition hover:text-yellow-300"
              >
                Forgot Access Key?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 py-5 text-sm  mb-6 font-semibold uppercase tracking-[0.2em] text-[#061417] shadow-lg shadow-yellow-400/10 transition-all duration-500 hover:bg-white active:scale-[0.98]"
            >
              {isSubmitting ? "please wait..." : "Login"}
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
            Create an Account
          </Link>
        </div>
        <ParticleBackground />
      </div>
    </>
  );
};

export default Login;
