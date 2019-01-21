import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <h1>ShapeShifter</h1>
    <nav>
      <NavLink exact to="/" activeClassName="selected">
        Home
      </NavLink>
      <NavLink to="/first" activeClassName="selected">
        First
      </NavLink>
      <NavLink to="/second" activeClassName="selected">
        Second
      </NavLink>
      <NavLink to="/third" activeClassName="selected">
        Third
      </NavLink>
      <NavLink to="/fourth" activeClassName="selected">
        Fourth
      </NavLink>
      <NavLink to="/fifth" activeClassName="selected">
        Fifth
      </NavLink>
      <NavLink to="/sixth" activeClassName="selected">
        Sixth
      </NavLink>
    </nav>
  </div>
)

export default Navbar
