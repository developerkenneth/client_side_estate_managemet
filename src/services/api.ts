export const fetchProperties = async () => {
  const response = await fetch('/api/properties')
  if (!response.ok) {
    throw new Error('Failed to load properties')
  }
  return response.json()
}
