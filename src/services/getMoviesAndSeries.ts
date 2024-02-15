import type { Response } from '~/types'

export function getMoviesAndSeries(): Promise<Response> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('movies.json')
        .then(res => res.json())
        .then(data => {
          resolve(data as Response)
        })
        .catch(err => reject(err))
    }, 1000)
  })
}
