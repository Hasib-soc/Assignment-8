"use client";

import { useEffect, useState } from "react";
import TileCard from "@/components/TileCard";

export default function AllTiles() {
  const [tiles, setTiles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/data/tiles.json")
      .then(res => res.json())
      .then(setTiles);
  }, []);

  const filtered = tiles.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        placeholder="Search tiles..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {filtered.map(tile => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
}