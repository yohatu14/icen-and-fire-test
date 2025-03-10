//region card component
"use client"

//imports
import React from 'react';
import { motion } from "framer-motion"
import type { House } from "@/types/house"

//props
interface RegionCardProps {
  region: {
    name: string
    top: string
    left: string
  }
  houses: House[]
}

export const RegionCard: React.FC<RegionCardProps> = ({ region, houses }) => {
  //return the region card
  return (
    //region card
    <motion.div
      className="absolute bg-white p-4 shadow-lg rounded-lg w-80"
      style={{
        top: `calc(${region.top} + 5%)`,
        left: `calc(${region.left} - 10%)`,
        transform: "translate(-50%, -100%)",
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold">Houses:</h2>
      {/* if there are houses */}
      {houses.length > 0 ? (
        <ul>
          {/* map through the houses */}
          {houses.map((house) => (
            <div className="flex items-center justify-between bg-background/80 backdrop-blur-sm p-2 rounded-md" key={house.url}>{house.name}</div>
          ))}
        </ul>
      ) : (
        //if there are no houses
        <p>No houses found in this region.</p>
      )}
    </motion.div>
  )
}

