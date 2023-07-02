import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function ServerUser() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <p>
      server:
      <br />
      {JSON.stringify(user)}
    </p>
  );
}
