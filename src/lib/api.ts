
export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: "no-store" })
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`)
  }
  return response.json()
}