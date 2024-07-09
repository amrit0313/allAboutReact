import React, { useRef, useState } from "react";
import classes from './AddUsers.module.css'
import Card from "../UI/card";
import Button from "../UI/button";
import ErrorModal from "../UI/errorModal";


const Addusers = (props)=>{
   const nameInputRef = useRef(); 
   const ageInputRef = useRef();

   const [error, setError] =useState('');

   const AddUserHandler = event =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length ===0 || enteredUserAge.trim().length === 0){
            setError({
                title:'Empty field',
                message :'Enter name and age'

            })
            return;
        }

        if(enteredUserAge<0){
            setError({
                title:'Invalid age',
                message:'Enter age greater than 0'
            })
            return;
        }
            
       props.onAddUser(enteredName, enteredUserAge);
      nameInputRef.current.value =""
      ageInputRef.current.value =""

    } 
    const AddErrorHandler = () => {
        setError('');
    }


    
    return(
        <div>
            {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {AddErrorHandler}/>}
       <Card className = {classes.input}>
         <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={nameInputRef}></input>
            <label htmlFor="age">Age(in years)</label>
            <input id="age" type="number" ref={ageInputRef} ></input>
            <Button type="submit"> Add</Button>
        </form>
       </Card>
       </div>
    )
}

export default Addusers;