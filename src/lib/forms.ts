import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .trim(),
  email: z.string().email().trim(),
  password: z.string().min(8).trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email().min(1, "Email cannot be empty").trim(),
  password: z.string().min(1, "Password cannot be empty").trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
