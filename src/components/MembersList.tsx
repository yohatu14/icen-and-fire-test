//members list component
//imports
import { SwornMember } from "@/types/house"
import { Heart, Skull } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

//props
interface MembersListProps {
  members: SwornMember[] | undefined
}

export function MembersList({ members }: MembersListProps) {
  //if there are no members
  if (!members || members.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-red-500 font-semibold">This house has no sworn members</p>
      </div>
    )
  }

  //return the members list
  return (
    <div className="flex-1 w-full">
      <div className="pr-4 space-y-2">
        {members.map((member, index) => (
          <TooltipProvider key={index}>
            <div className="flex items-center justify-between bg-background/80 backdrop-blur-sm p-2 rounded-md">
              <span className="truncate mr-2">{member?.name || "Unknown Member"}</span>

              {member?.alive ? (
                <Heart className="h-4 w-4 text-green-500 fill-green-500 flex-shrink-0" />
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Skull className="h-4 w-4 text-red-500 flex-shrink-0" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-[200px]">
                    <p className="font-semibold">{member?.name || "Unknown Member"} has died</p>
                    <p>{member?.died ? `Died: ${member.died}` : "Unknown cause"}</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
} 