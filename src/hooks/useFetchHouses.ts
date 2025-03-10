//This hook is used to fetch the houses from the API in the WesterosMap component

//imports
import { useEffect, useState } from "react";
import {fetchData} from "@/lib/api"
import { House } from "@/types/house";
import { API_BASE_URL } from "@/utils/const";

const HOUSES_ENDPOINT = `${API_BASE_URL}/houses`

export function useHouses() {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  //use effect to fetch the houses when the component is mounted
  useEffect(() => {
    async function fetchHouses() {
      try {
        const allHouses = await fetchData<House[]>(HOUSES_ENDPOINT)
        const data= await Promise.all(allHouses)
        setHouses(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchHouses();
  }, []);

  //return results and states of the fetch
  return { houses, loading, error };
}
