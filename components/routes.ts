import { Dashboard, Person, LibraryBooks } from '@material-ui/icons'

export type dashboardRoutesType = {
  path: string
  name: string
  icon: any
}[]

const dashboardRoutes: dashboardRoutesType = [
  {
    path: '/',
    name: 'Dashboard',
    icon: Dashboard
  },
  {
    path: '/memos',
    name: 'Memos',
    icon: LibraryBooks
  },
  {
    path: '/login',
    name: 'Login',
    icon: Person
  },
  {
    path: '/sign_up',
    name: 'Sign up',
    icon: Person
  }
]

export default dashboardRoutes
