import React from 'react'
import { Link } from 'react-router-dom';

export default function LoggedInHeader(props) {
  return (
    <div id="header">
      <Link to="/login"><button onClick={props.handleLogout}>Logout</button></Link>
    </div>
  )
}
