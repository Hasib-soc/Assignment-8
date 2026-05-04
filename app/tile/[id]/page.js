import data from "@/data/tiles.json";

export default function TileDetails({ params }) {
  const tile = data.find(t => t.id === params.id);

  return (
    <div className="p-6 flex gap-6">
      <img src={tile.image} className="w-1/2" />

      <div>
        <h1 className="text-2xl">{tile.title}</h1>
        <p>{tile.description}</p>
        <p>${tile.price}</p>
      </div>
    </div>
  );
}