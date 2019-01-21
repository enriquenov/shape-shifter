import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <h1>ShapeShifter</h1>
    <nav>
      <NavLink exact to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/example1" activeClassName="selected">
        First
      </NavLink>
      <NavLink to="/example2" activeClassName="selected">
        Second
      </NavLink>
      <NavLink to="/example3" activeClassName="selected">
        Third
      </NavLink>
      <NavLink to="/example4" activeClassName="selected">
        Fourth
      </NavLink>
      <NavLink to="/example5" activeClassName="selected">
        Fifth
      </NavLink>
      <NavLink to="/example6" activeClassName="selected">
        Sixth
      </NavLink>
    </nav>
  </div>
)

export default Navbar
