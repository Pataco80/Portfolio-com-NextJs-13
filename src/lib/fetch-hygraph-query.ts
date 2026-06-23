export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number,
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    next: {
      revalidate,
    },
    body: JSON.stringify({
      query,
    }),
  })

  const json = await response.json()

  if (!response.ok || !json.data) {
    console.error('Hygraph query error:', JSON.stringify(json, null, 2))
    console.error('HYGRAPH_URL set:', !!process.env.HYGRAPH_URL, '| HYGRAPH_TOKEN set:', !!process.env.HYGRAPH_TOKEN)
    throw new Error(`Hygraph query failed (HTTP ${response.status})`)
  }

  return json.data
}
