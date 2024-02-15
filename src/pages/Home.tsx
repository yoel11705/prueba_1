import { Link } from 'react-router-dom'

import { Card } from '~/components/Card'
import Layout from '~/layouts/Layout'

export default function Home() {
  return (
    <Layout title="titulos populares">
      <ul className="flex gap-4">
        <li>
          <Link to="/series">
            <Card title="series populares">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">SERIES</span>
              </div>
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <Card title="Peliculas populares">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white">PELICULAS</span>
              </div>
            </Card>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
