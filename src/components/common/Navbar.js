import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../../lib/auth'

function Navbar() {
  const history = useHistory()
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = React.useState(false)
  const isAuth = isAuthenticated()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleLogout = () => {
    removeToken()
    history.push('/')
  }

  return (
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            🐈
          </Link>
          <span
            className={`navbar-burger ${isOpen ? 'is-active' : ''}`}
            onClick={handleToggle}
          >
            <span />
            <span />
            <span />
          </span>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth && (
                  <>
                    <Link to="/auth/login" className="button is-danger">
                  Login
                    </Link>
                    <Link to="/auth/register" className="button is-danger">
                  Register
                    </Link>
                  </>
                )}
                {isAuth && (
                  <>
                    <Link to="/chat" className="button is-danger">
                    😻
                    </Link><button className="button is-danger" onClick={handleLogout}>
                      Log Out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar