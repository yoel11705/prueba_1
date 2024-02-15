import { useState, useEffect } from 'react'

import { getMoviesAndSeries } from '~/services/getMoviesAndSeries'
import { ProgramType } from '~/types.d'
import type { Entry } from '~/types'
import { filterPrograms, sortProgramByTitle } from '~/utils/programs'
import { INITIAL_RESULTS } from '~/constants'

export function useMovies() {
  const [movies, setMovies] = useState<Entry[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getMoviesAndSeries()
      .then(({ entries }) => {
        const filteredMovies = filterPrograms(entries, ProgramType.Movie)
        const sortedMovies = sortProgramByTitle(filteredMovies)
        const moviesToShow = sortedMovies.slice(0, INITIAL_RESULTS)

        setMovies(moviesToShow)
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    data: movies,
    isLoading,
    error,
  }
}
