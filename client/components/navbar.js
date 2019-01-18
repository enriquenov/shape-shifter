import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <h1>Three.js in React using react-three-renderer</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/example1">Example 1</Link>
      <Link to="/example2">Example 2</Link>
      <Link to="/example3">Example 3</Link>
      <Link to="/example4">Example 4</Link>
      <Link to="/example5">Example 5</Link>
    </nav>
  </div>
)

export default Navbar
