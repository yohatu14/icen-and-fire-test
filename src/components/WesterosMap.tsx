//Map component
"use client"

//imports
import { useState, useMemo } from "react"
import { useHouses } from "@/hooks/useFetchHouses"
import { useRouter } from "next/navigation"
import { regions } from "@/utils/regions"
import { RegionHighlight } from "./RegionHighlight"
import { RegionCard } from "./RegionCard"
import { ErrorComponent } from "./ErrorComponent"
import { LoaderComponent } from "./LoaderComponent"
const MAP_HEIGHT = 600;

export default function WesterosMap() {
    //use houses hook
    const { houses, loading, error } = useHouses()
    const [hoveredRegion, setHoveredRegion] = useState<(typeof regions)[0] | null>(null)
    const [isNavigating, setIsNavigating] = useState(false)
    //router
    const router = useRouter()

    //handle region click
    const handleRegionClick = (regionName: string) => {
        setIsNavigating(true)
        router.push(`/region/${encodeURIComponent(regionName)}`)
    }

    //filtered houses
    const filteredHouses = useMemo(() => {
        if (!hoveredRegion) return []
        return houses.filter((house) => house.region === hoveredRegion.name)
    }, [houses, hoveredRegion])

    //if loading or navigating
    if (loading || isNavigating) return <LoaderComponent />

    //if some error exists on fetchs
    if (error) return <ErrorComponent error={error} />


    return (

        <div
            className="relative w-full bg-cover bg-center"
            style={{
                height: `${MAP_HEIGHT}px`,
            }}
            role="img"
            aria-label="Map of Westeros with interactive regions"
        >
            
            {regions.map((region) => (
                <RegionHighlight
                    key={region.name}
                    region={region}
                    onMouseEnter={() => setHoveredRegion(region)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => handleRegionClick(region.name)}
                />
            ))}

            {hoveredRegion && <RegionCard region={hoveredRegion} houses={filteredHouses} />}
        </div>
    )
}

