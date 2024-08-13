import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export const sessionHelper = {
  deleteSession: async () => {
    cookies().delete("session");
    redirect("/admin/login");
  },
  createSession: async (userId: string, name: string, email: string) => {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const session = await encrypt({
      userId,
      name,
      email,
      expiresAt: expiresAt.toISOString(),
    });

    cookies().set("session", session, {
      expires: expiresAt,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  },
  verifySession: async (): Promise<{ isAuth: boolean; user: any }> => {
    const cookie = cookies().get("session")?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
      return { isAuth: false, user: undefined };
    }

    return { isAuth: true, user: session };
  },
};

function encrypt(payload: {
  userId: string;
  name: string;
  email: string;
  expiresAt: string;
}) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return undefined;
  }
}
