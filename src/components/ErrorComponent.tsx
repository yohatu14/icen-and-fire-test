//error component when there is an error
import { CircleX } from "lucide-react";

export const ErrorComponent = ({ error }: { error: Error }) => {
    return (
        <span className="flex gap-2 items-center">
        <CircleX className="animate-spin text-primary w-8 h-8" />
        <span className="text-primary">Error: {error.message}</span>
    </span>
    )
}