import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "email is required").email("invalid email"),
  password: z.string().min(1, "password is required"),
});

// registration schema
export const registerSchema = z
  .object({
    email: z.string().min(1, "email is required").email("invalid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
        "Password must contain uppercase, lowercase, number, special character",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    first_name: z.string().min(1, "Please enter your first name"),
    last_name: z.string().min(1, "Please enter your last name"),
    terms: z.literal(true, {
      message: "You must accept the terms and conditions",
    }),
    username: z
      .string()
      .min(
        3,
        "Please enter your username, username cannot be less than 3 characters",
      ),
  })
  .refine(
    (data) => data.password === data.confirmPassword,

    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );
