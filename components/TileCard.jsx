import Link from "next/link";

export default function TileCard({ tile }) {
  return (
    <div className="bg-white p-3 shadow rounded">
      <img src={tile.image} className="w-full h-40 object-cover" />

      <h2 className="font-bold mt-2">{tile.title}</h2>
      <p>${tile.price}</p>

      <Link href={`/tile/${tile.id}`}>
        <button className="btn mt-2 w-full">Details</button>
      </Link>
    </div>
  );
}