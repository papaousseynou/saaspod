"use client";
import { Button } from "@/components/ui/button";
import { SupabaseBrowser } from "@/lib/supabase/browser";
import { KeyRound } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function ButtonDemo() {
  const handleLoginWithOAuth = (provider: "github" | "google") => {
    const supabase = SupabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "auth/callback",
      },
    });
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
          <div className="flex item-center gap-2">
            <KeyRound />
            <h1 className="text-2xl font-bold">Next + Supabase 👇</h1>
          </div>
          <p className="text-sm text-gray-300">Register/signIn Today</p>
          <div className="flex flex-col gap-2">
            <Button
              className="w-full items-center gap-2"
              variant="outline"
              onClick={() => handleLoginWithOAuth("github")}
            >
              <FaGithub />
              Github
            </Button>
            <Button
              className="w-full items-center gap-2"
              variant="outline"
              onClick={() => handleLoginWithOAuth("google")}
            >
              <FcGoogle /> Google
            </Button>
          </div>
          <div className="glowBox -z-10"></div>
        </div>
      </div>
    </>
  );
}
