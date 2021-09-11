import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

function Navbar() {
  const history = useHistory()
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = React.useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

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
                <Link to="/auth/login" className="button is-danger">
                  Login
                </Link>
                <Link to="/auth/register" className="button is-danger">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar