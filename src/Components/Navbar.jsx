import React from 'react'
import { Link } from 'react-router-dom'
import "../Assets/CSS/nav.css"
const Navbar = () => {
  return (
    <div>
        <ul>
  <li><Link to="/">Home</Link ></li>
  <li><Link to="/view">View</Link ></li>
  <li><Link to="/create">Create</Link ></li>
  <li><Link to="/delete">Delete</Link ></li>
  <li><Link to="/update">Update</Link ></li>

</ul>
    </div>
  )
}

export default Navbar