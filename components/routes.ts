import LibraryBooks from '@material-ui/icons/LibraryBooks'
import FormatListNumbered from '@material-ui/icons/FormatListNumbered'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'

export type dashboardRoutesType = {
  path: string
  name: string
  icon: any
}[]

const dashboardRoutes: dashboardRoutesType = [
  {
    path: '/new_memo',
    name: '新規メモ作成',
    icon: LibraryAddIcon
  },
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
