import React, { useState } from 'react';
import Addusers from './components/users/AddUsers';
import Userlist from './components/users/userList';


// const []
function App() {
  
  const [addusers, setAddUsers] = useState([])

  const AddUserHandler = (uName, uAge) => {
    setAddUsers((prevUsers)=>{
      return [...prevUsers, {name:uName, age:uAge, id:Math.random().toString()}];
    });
  }
  
  return (
    <div>
      <Addusers onAddUser = {AddUserHandler}/>
      <Userlist users = {addusers} />
    </div>
  );
}

export default App;
