import { getQuery, postQuery } from "@/lib/database";
import { FormState, RegisterFormSchema } from "@/lib/forms";
import { createSession } from "@/lib/session";

export async function register(state: FormState, formData: FormData) {
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
    const { name, email, password } = validatedFields.data;
    const newUserString = await postQuery(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password],
    );

    const newUser = JSON.parse(newUserString);

    console.log("new users", newUser);

    const id = newUser.lastID;

    console.log("id", id);

    const getUserString = await getQuery(
      "SELECT * FROM users WHERE id = " + id,
    );
    const getUser = JSON.parse(getUserString);

    console.log(getUser);

    await createSession(getUser.id, getUser.name, getUser.email);

    return { message: "success" };
  } catch (error) {
    console.log("error", error);
    return {
      message: "Failed to register",
    };
  }
}
