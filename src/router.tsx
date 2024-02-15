import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Series from './pages/Series'
import Movies from './pages/Movies'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/series',
    element: <Series />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
])
