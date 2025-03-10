//This hook is used to fetch the houses by region from the API in the WesterosMap component and enrich the houses with the sworn members

//imports
import type { House, SwornMember } from "@/types/house"
import {fetchData} from "@/lib/api"
import { API_BASE_URL } from "@/utils/const";

//endpoints
const HOUSES_ENDPOINT = `${API_BASE_URL}/houses`


async function fetchSwornMember(url: string): Promise<SwornMember> {
  try {
    //fetch sworn member
    const data = await fetchData<{ name?: string; died?: string }>(url)
    return {
      name: data.name || "Unknown",
      alive: !data.died,
      died: data.died || undefined,
    }
  } catch (error) {
    console.error(`Error fetching sworn member from ${url}:`, error)
    return { name: "Unknown", alive: false }
  }
}

function filterHousesByRegion(houses: House[], region: string): House[] {
  return houses.filter((house) => house.region.toLowerCase() === region.toLowerCase())
}

async function enrichHouseWithSwornMembers(house: House): Promise<House> {
  //if there are no sworn members
  if (house.swornMembers.length === 0) {
    return { ...house, swornMembersDetails: [] }
  }
  const swornMembersDetails = await Promise.all(house.swornMembers.map(fetchSwornMember))

  return { ...house, swornMembersDetails }
}

//fetch houses by region
export async function getHousesByRegion(region: string): Promise<House[]> {
  try {
    const allHouses = await fetchData<House[]>(HOUSES_ENDPOINT)
    const filteredHouses = filterHousesByRegion(allHouses, region)

    //enrich houses with sworn members
    return await Promise.all(filteredHouses.map(enrichHouseWithSwornMembers))
  } catch (error) {
    console.error("Error fetching houses:", error)
    throw new Error("Failed to fetch houses. Please try again later.")
  }
}
