"use client";

import { signOut, useSession } from "next-auth/react";

export default function SignOutButton() {
  const { status } = useSession();
  if (status !== "authenticated") return null;
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="border rounded-md text-center"
    >
      SignOut
    </button>
  );
}
