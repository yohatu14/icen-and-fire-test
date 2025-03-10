import { getHousesByRegion } from "@/hooks/useHousesByRegion";
import HouseCard from "@/components/HouseCard";
import Link from "next/link";

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const resolvedParams = await params;
  const decodedRegion = decodeURIComponent(resolvedParams.region);
  const houses = await getHousesByRegion(decodedRegion);

  return (
    <div className="p-6">
      <div className="mb-4">
        <Link
          href="/map"
          className="bg-gray-300 hover:bg-gray-300 text-black px-4 py-2 rounded-md shadow-md transition duration-200"
        >
          🔙 Back to Map
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4">{decodedRegion}</h1>
      {houses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {houses.map((house) => (
            <HouseCard key={house.url} house={house} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No houses found in this region.</p>
      )}
    </div>
  );
}
