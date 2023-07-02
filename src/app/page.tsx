import ClientUser from "@/components/ClientUser";
import ServerUser from "@/components/ServerUser";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4 max-w-full break-words">
        <h2>Signin Status</h2>
        <ServerUser />
        <ClientUser />
        <SignInButton />
        <SignOutButton />
      </div>
    </main>
  );
}
