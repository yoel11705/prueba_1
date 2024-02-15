import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { CONTAINER_CLASSNAME } from '~/constants'

interface NavProps {
  title: string
  children: React.ReactNode
}

export default function Layout({ title, children }: NavProps) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-neutral-800">
          <div className={`${CONTAINER_CLASSNAME}`}>
            <h2 className="text-2xl font-medium text-white bg-neutral-800">{title}</h2>
          </div>
        </section>
        <section className={`${CONTAINER_CLASSNAME} space-y-4`}>{children}</section>
      </main>
      <Footer />
    </>
  )
}
