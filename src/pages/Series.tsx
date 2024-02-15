import { EmptyComponentWrapper } from '~/components/EmptyComponentWrapper'
import { EmptyData } from '~/components/EmptyData'
import { ErrorComponent } from '~/components/ErrorComponent'
import { FilterMaxResults, FilterReleaseYear } from '~/components/Filters'
import { ListPrograms } from '~/components/ListPrograms'
import { useFilters } from '~/hooks/useFilters'
import { useSeries } from '~/hooks/useSeries'
import Layout from '~/layouts/Layout'
import type { Entry } from '~/types'

export default function Series() {
  const { data, error, isLoading } = useSeries()
  const { handleMaxResults, maxResults, handleReleaseYear, releaseYear } = useFilters()

  const dataToShow = data.slice(0, maxResults).filter(item => item.releaseYear >= releaseYear)

  if (error) {
    return <ErrorComponent />
  }

  return (
    <Layout title="Series Populares">
      {isLoading ? null : (
        <div className="flex flex-wrap gap-4">
          <FilterMaxResults maxResults={maxResults} onChange={handleMaxResults} />
          <FilterReleaseYear releaseYear={releaseYear} onChange={handleReleaseYear} />
        </div>
      )}
      <EmptyComponentWrapper<Entry[]>
        EmptyComponent={<EmptyData />}
        NonEmptyComponent={<ListPrograms data={dataToShow} />}
        data={dataToShow}
        isLoading={isLoading}
      />
    </Layout>
  )
}
