//loader component
import { Loader } from "lucide-react";

export const LoaderComponent = () => {
    return (
        <span className="flex gap-2 items-center">
            <Loader className="animate-spin text-primary w-8 h-8" />
            <span className="text-primary">Loading...</span>
        </span>)
}