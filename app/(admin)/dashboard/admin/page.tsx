import { UserRoles } from "@/database/models/user.model";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};
const AdminPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== UserRoles.ADMIN) redirect("/dashboard");

  return <div>AdminPage</div>;
};

export default AdminPage;
