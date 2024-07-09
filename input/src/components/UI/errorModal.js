import React from 'react';
import classes from './errorModal.module.css';
import Card from './card';
import Button from './button';
import ReactDOM from 'react-dom'

const Backdrop =(props) =>{
    return   <div className={classes.errorModal} onClick={props.onConfirm} />
}

const Overlay =(props) =>{
    return (
        <Card className={classes.errorModalContent}>
            <header>
            <h2>{props.title}</h2>
            </header>
            <p>{props.message}</p>
            <Button onClick={props.onConfirm}>Close</Button>
        </Card>
     
);
}

const ErrorModal = ({ title, message, onConfirm }) => {
    return(    <React.Fragment>
 
        {ReactDOM.createPortal(<Backdrop onConfirm ={onConfirm} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<Overlay onConfirm ={onConfirm} message = {message} title ={title} />, document.getElementById('overlay-root'))}

    </React.Fragment>
   
)};

export default ErrorModal;