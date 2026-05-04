"use client";

import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const user =
    typeof window !== "undefined" && localStorage.getItem("user");

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="p-6">
      <h1>My Profile</h1>

      <button className="btn mt-4" onClick={() => router.push("/update-profile")}>
        Update
      </button>
    </div>
  );
}