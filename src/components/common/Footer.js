import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        {/* <p>
          <strong>Find Floppas</strong> by James Guppy
        </p> */}
        <ul>
          <li>{`© ${new Date().getFullYear()} Find Floppas`}</li>
        </ul>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/james-guppy-91063018b/" target="blank">
              LinkedIn
            </a>
          </li>
          <li> | </li>
          <li>
            <a href="https://github.com/chikin-namban92?tab=repositories" target="blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer