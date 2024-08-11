"use server";

import { FormState, RegisterFormSchema } from "@/lib/forms";
import { createUser, getUserByEmail } from "@/lib/services/users_service";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";

/**
 * Registers a new user.
 *
 * @param {FormState} _ - The form state (unused).
 * @param {FormData} formData - The form data containing the user's name, email, and password.
 * @returns {Promise<{ errors?: Record<string, string[]>, message?: string }>} - A promise that resolves to an object containing either an `errors` property with field validation errors or a `message` property with a success message.
 */
export async function register(_: FormState, formData: FormData) {
  const validatedFields = RegisterFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Check if user already exists
    const user = await getUserByEmail(validatedFields.data.email);
    if (user) {
      return {
        errors: {
          email: ["User already exists"],
        },
      };
    }

    // Create new user
    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({ name, email, password: hashedPassword });

    // Signed in user
    await createSession(
      newUser.id?.toString() ?? "",
      newUser.name,
      newUser.email,
    );

    // Return success message
    return { message: "success" };
  } catch (error: any) {
    return {
      message: "Failed to register " + error.message,
    };
  }
}