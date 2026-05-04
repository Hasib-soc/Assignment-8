"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center p-20">
      <h1 className="text-4xl font-bold">
        Discover Your Perfect Aesthetic
      </h1>

      <Link href="/all-tiles">
        <button className="btn mt-4">Browse Now</button>
      </Link>

      <marquee className="mt-10">
        New Arrivals | Weekly Feature | Modern Tiles Collection
      </marquee>
    </div>
  );
}