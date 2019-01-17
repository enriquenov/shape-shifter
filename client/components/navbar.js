import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div>
    <h1>Three.js in React using react-three-renderer</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/example1">Example 1</Link>
    </nav>
    <hr />
  </div>
)

export default Navbar
