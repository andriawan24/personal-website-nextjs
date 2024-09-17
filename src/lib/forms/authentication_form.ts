import { z } from "zod";

export const RegisterFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .trim(),
  email: z.string().email().trim(),
  password: z.string().min(8).trim(),
  keywords: z.string().min(1, "Keywords cannot be empty"),
});

export const LoginFormSchema = z.object({
  email: z.string().email().min(1, "Email cannot be empty").trim(),
  password: z.string().min(1, "Password cannot be empty").trim(),
});

/**
 * Represents the state of an authentication form.
 *
 * @property {Object} errors - The validation errors for the form fields.
 * @property {string[]} errors.name - The validation errors for the name field.
 * @property {string[]} errors.email - The validation errors for the email field.
 * @property {string[]} errors.password - The validation errors for the password field.
 * @property {string} message - The message associated with the form state.
 */
export type AuthFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        keywords?: string[];
      };
      message?: string;
    }
  | undefined;
