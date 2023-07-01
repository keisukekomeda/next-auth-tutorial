"use client";

import { useSession } from "next-auth/react";

export default function ClientUser() {
  const { data: session } = useSession();
  const user = session?.user;
  return <p>{JSON.stringify(user)}</p>;
}
