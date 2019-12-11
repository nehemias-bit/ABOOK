import React from 'react';
import LoggedInHeader from './LoggedInHeader';

export default function EditUser(props) {
  return (
    <>
     <LoggedInHeader handleLogout={props.handleLogout} currentUser={props.currentUser}/> 
     <div id="edit-user">
      <form onSubmit={props.submitUserUpdate}>
        <input type="text" placeholder="new profile picture" name="user_img" value={props.userForm.user_img} onChange={props.handleUserChange} />
        <button>Update</button>
      </form>
     </div>
    </>
  )
}
