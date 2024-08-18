"use server";

import { userService } from "@/lib/database/services/users_service";
import { FormState, RegisterFormSchema } from "@/lib/forms";
import { sessionHelper } from "@/lib/session";
import bcrypt from "bcrypt";

/**
 * Registers a new user.
 *
 * @param {FormState} _ - The form state (unused).
 * @param {FormData} formData - The form data containing the user's name, email, and password.
 * @returns {Promise<{ errors?: Record<string, string[]>, message?: string }>} - A promise that resolves to an object containing either an `errors` property with field validation errors or a `message` property with a success message.
 */
export async function signUp(_: FormState, formData: FormData) {
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
    const user = await userService.getUserByEmail(validatedFields.data.email);
    if (user) {
      return {
        errors: {
          email: ["User already exists"],
        },
      };
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userService.createUser({
      name,
      email,
      password: hashedPassword,
    });

    await sessionHelper.createSession(
      newUser.id?.toString() ?? "",
      newUser.name,
      newUser.email,
    );

    return { message: "success" };
  } catch (error: any) {
    return {
      message: "Failed to register " + error.message,
    };
  }
}
