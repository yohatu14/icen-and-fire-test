
//region highlight component
"use client"

//imports
import { motion } from "framer-motion"

//props
interface RegionHighlightProps {
    region: {
        name: string
        top: string
        left: string
        color: string
    }
    onMouseEnter: () => void
    onMouseLeave: () => void
    onClick: () => void
}


export function RegionHighlight({ region, onMouseEnter, onMouseLeave, onClick }: RegionHighlightProps) {
    
    return (
        //region zone using coordinates from utils/regions.ts
        <motion.div
            className="absolute w-[250px] h-[200px] rounded-md cursor-pointer flex flex-col items-center justify-center"
            style={{
                top: region.top,
                left: region.left,
                backgroundColor: region.color,
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.8, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            role="button"
            aria-label={`View houses in ${region.name}`}
        >
            <div className="text-center p-6">
                <h2 className="text-xl font-bold mb-2">{region.name}</h2>
            </div>

        </motion.div>
    )
}

