import {
  defaultFont,
  container,
  primaryColor,
  grayColor,
} from './materialDashboard'

const footerStyle: any = {
  block: {
    color: 'inherit',
    padding: '15px',
    textTransform: 'uppercase',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
    ...defaultFont,
    fontWeight: '500',
    fontSize: '12px',
  },
  center: {
    padding: '15px 0',
    margin: '0',
    fontSize: '14px',
    textAlign: 'center'
  },
  footer: {
    bottom: '0',
    borderTop: '1px solid ' + grayColor[11],
    padding: '15px 0',
    ...defaultFont,
  }
}
export default footerStyle
