import { verifySession } from "@/lib/session";

export default async function AdminPage() {
  const user = await verifySession();
  if (!user) return null;

  return (
    <div>
      <h1>Welcome {user.user.name}</h1>
    </div>
  );
}
