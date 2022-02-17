import LibraryBooks from '@material-ui/icons/LibraryBooks'
import FormatListNumbered from '@material-ui/icons/FormatListNumbered'

export type dashboardRoutesType = {
  path: string
  name: string
  icon: any
}[]

const dashboardRoutes: dashboardRoutesType = [
  {
    path: '/memos',
    name: 'メモ',
    icon: LibraryBooks
  },
  {
    path: '/question_formats',
    name: '質問フォーマット',
    icon: FormatListNumbered
  }
]

export default dashboardRoutes
