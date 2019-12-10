import React from 'react'
import { Link } from 'react-router-dom';

export default function LoggedOutHeader() {
  return (
    <div id="logged-out-header-main">
      <div id="logged-out-header-sub">
      <Link to="/login"><h1>abook</h1></Link>
      </div>
    </div>
  )
}
