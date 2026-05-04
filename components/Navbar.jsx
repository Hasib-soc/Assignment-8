"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const user = typeof window !== "undefined" && localStorage.getItem("user");

  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <Link href="/">TileGallery</Link>

      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/all-tiles">Tiles</Link>
        <Link href="/my-profile">Profile</Link>
      </div>

      {user ? (
        <button
          onClick={() => {
            localStorage.removeItem("user");
            router.push("/");
          }}
        >
          Logout
        </button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}