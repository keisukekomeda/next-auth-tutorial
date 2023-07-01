"use client";

import { auth } from "@/lib/firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signIn as signInByNextAuth } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function SignInPage() {
  const { register, handleSubmit } = useForm<SignInForm>();

  return (
    <div>
      <form
        className="flex flex-col gap-2 text-black"
        onSubmit={handleSubmit(async (d) => {
          try {
            const userCredential = await signInWithEmailAndPassword(
              auth,
              d.email,
              d.password
            );
            const idToken = await userCredential.user.getIdToken();
            await signInByNextAuth("credentials", {
              idToken,
              callbackUrl: "/",
            });
          } catch (e) {
            console.error(e);
          }
        })}
      >
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="email"
          autoComplete="email"
          required
          placeholder="email"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          autoComplete="password"
          required
          placeholder="password"
        />
        <button type="submit" className="text-white">
          ログイン
        </button>
      </form>
    </div>
  );
}

type SignInForm = {
  email: string;
  password: string;
};
