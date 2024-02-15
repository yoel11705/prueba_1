import { useState, useEffect } from 'react'

import { getMoviesAndSeries } from '~/services/getMoviesAndSeries'
import { ProgramType } from '~/types.d'
import type { Entry } from '~/types'
import { filterPrograms, sortProgramByTitle } from '~/utils/programs'
import { INITIAL_RESULTS } from '~/constants'

export function useSeries() {
  const [series, setSeries] = useState<Entry[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getMoviesAndSeries()
      .then(({ entries }) => {
        const filteredSeries = filterPrograms(entries, ProgramType.Series)
        const sortedSeries = sortProgramByTitle(filteredSeries)
        const seriesToShow = sortedSeries.slice(0, INITIAL_RESULTS)

        setSeries(seriesToShow)
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    data: series,
    isLoading,
    error,
  }
}
