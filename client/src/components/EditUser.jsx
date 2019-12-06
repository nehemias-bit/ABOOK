import React from 'react'

export default function EditUser(props) {
  return (
    <div>
      <form onSubmit={props.submitUserUpdate}>
        {/* <input type="text" placeholder="new username" name="username" value={props.userForm.username} onChange={props.handleUserChange}/> */}
        <input type="text" placeholder="new profile picture" name="user_img" value={props.userForm.user_img} onChange={props.handleUserChange} />
        {/* <input type="text" placeholder="new password" name="password" value={props.userForm.password} onChange={props.handleUserChange} /> */}
        <button>Update</button>
      </form>
    </div>
  )
}
