import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import Navbar from './navbar'
import Sidebar from './sidebar'

const APP_BAR_MOBILE = 64
const APP_BAR_DESKTOP = 92

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}))

const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="d-flex overflow-hidden w-100">
        <Navbar onOpenSidebar={() => setOpen(true)} />
        <Router>
          <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
        </Router>
        <MainStyle>
          {children}
        </MainStyle>
      </div>
    </div>
  )
}

export default Layout
