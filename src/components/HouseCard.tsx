//house card component
"use client";
//imports
import { House } from "@/types/house";
import { houses_images } from "@/utils/houses_images";
import { useMemo } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { MembersList } from "./MembersList";

export default function HouseCard({ house }: { house: House }) {
  //random image
  const randomImage = useMemo(() => {
    return houses_images[Math.floor(Math.random() * houses_images.length)]
  }, [])

  //if house is not available
  if (!house) {
    return (
      <Card className="w-full h-[400px] flex items-center justify-center">
        <p>House data not available</p>
      </Card>
    )
  }

  return (
    <Card className="w-full h-[400px] overflow-hidden   border-gray-300">
      <div className="relative w-full h-full">
        {/* Background Image */}
        <Image
          src={randomImage?.src || "/placeholder.svg?height=400&width=400"}
          alt={house.name || "House"}
          fill
          className="object-cover opacity-20"
          sizes="(max-width: 768px) 100vw, 400px"
        />

        {/* Content */}
        <CardContent className="relative z-10 h-full flex flex-col p-4">
          <div className="mb-4">
            <h2 className="font-bold text-xl text-center">{house.name || "Unknown House"}</h2>
            <p className="text-sm text-center text-gray-700">{house.region || "Unknown Region"}</p>
          </div>
          <h3 className="font-semibold text-center mb-2">Sworn Members</h3>

          {/* Members List */}
          <div className="flex-1 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400">
            <MembersList members={house.swornMembersDetails} />
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

