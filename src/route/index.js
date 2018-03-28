import Home from 'src/views/home'
import Charts from 'src/views/charts'
import Me from 'src/views/me'
import Table from 'src/views/table'

const route = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/charts',
    component: Charts
  },
  {
    path: '/table',
    component: Table
  },
  {
    path: '/me',
    component: Me
  }
]

export default route