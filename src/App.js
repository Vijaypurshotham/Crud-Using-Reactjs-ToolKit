import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addUser, deleteUser, updateUser} from './Features/Users'

const App = () => {

  // ! It dispatches an action
  
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [newUsername, setNewUsername] = useState("")

  return (
    <div className='App'>
      <div className='adduser'>
 <input type='text' placeholder='Enter a Name...' onChange={(e) => setName(e.target.value)}/>
<input type='text' placeholder='Enter a Username...' onChange={(e) => setUsername(e.target.value)}/>

{/* Instead of passing the name and username twice we can pass it at once which is called as short hand property */}
<button onClick={() => {dispatch(addUser({id: userList[userList.length - 1].id + 1, name, username}))}}>{" "}
          Add User
        </button>

      </div>
      <div className='displayUsers'>
     {userList.map((user) => {
      return (
        <div>
          <p>{user.id}</p>
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>     
        <input type='text' placeholder='New Username...' onChange={(e) => setNewUsername(e.target.value)}/> 
        <br></br>
        <br></br>
        <button className='button2'  onClick={() => {dispatch(updateUser({id: user.id, username: newUsername}))}}>Update Username</button>
        <button  className='button3'  onClick={() => {dispatch(deleteUser({id: user.id}))}}>Delete Username</button>
        </div>
        
        
      )
      
      
     })}
      
    

      </div>
     
    </div>
  )
}

export default App
