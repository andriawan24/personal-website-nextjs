"use server";

import { userService } from "@/lib/database/services/users_service";
import {
  AuthFormState,
  LoginFormSchema,
} from "@/lib/forms/authentication_form";
import { sessionHelper } from "@/lib/session";
import bcrypt from "bcryptjs";

export async function signIn(_: AuthFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
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
    if (!user) {
      return {
        errors: {
          email: ["User not found"],
        },
      };
    }

    const { password } = validatedFields.data;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return {
        errors: {
          email: ["User not found"],
        },
      };
    }

    await sessionHelper.createSession(
      user.id?.toString() ?? "",
      user.name,
      user.email,
    );

    return { message: "success" };
  } catch (error: any) {
    return {
      message: "Failed to login " + error.message,
    };
  }
}
