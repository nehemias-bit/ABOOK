import React from 'react'

export default function Header(props) {
  return (
    <div id="header">
      <button onClick={props.handleLogout}>Logout</button>
    </div>
  )
}
