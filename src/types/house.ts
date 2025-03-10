//interfaces for API data structure
export interface House {
    url: string;
    name: string;
    region: string;
    swornMembers: string[]
    swornMembersDetails: SwornMember[];
  }

  
export interface SwornMember {
    
    name: string;
    alive: boolean;
    died?: string;
}