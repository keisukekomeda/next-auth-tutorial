"use client";

import { useSession } from "next-auth/react";

export default function ClientUser() {
  const { data: session } = useSession();
  console.log(session);
  const user = session?.user;
  return (
    <p>
      client:
      <br />
      {JSON.stringify(user)}
    </p>
  );
}
