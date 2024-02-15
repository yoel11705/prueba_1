import { useState } from 'react'

import { INITIAL_RELEASE_YEAR, INITIAL_RESULTS } from '~/constants'

export function useFilters() {
  const [maxResults, setMaxResults] = useState(INITIAL_RESULTS)
  const [releaseYear, setReleaseYear] = useState(INITIAL_RELEASE_YEAR)

  const handleMaxResults = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMaxResults(Number(e.target.value))
  }

  const handleReleaseYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReleaseYear(Number(e.target.value))
  }

  return {
    maxResults,
    handleMaxResults,
    releaseYear,
    handleReleaseYear,
  }
}
