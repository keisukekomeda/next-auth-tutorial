"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function SignInButton() {
  const { status } = useSession();
  if (status !== "unauthenticated") return null;
  return (
    <Link href="/signin" className="border rounded-md text-center">
      SignIn
    </Link>
  );
}
