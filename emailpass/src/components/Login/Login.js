import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/Auth-context';

const emailReducer = (state, action) => {
  if (action.type === 'input_type') {
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'input_blur') {
    return { value: state.value, isValid: state.value.includes('@') }
  }

  return { value: "", isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === 'input_type_password') {
    console.log(action.value);
    return { value: action.value, isValid: (action.value).trim().length > 6 }
  }
  if (action.type === 'input_blur_password') {
    return { value: state.value, isValid: (state.value).trim().length > 6 }
  }
  return { value: "", isValid: false }
}

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: "", isValid: null });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const auth = useContext(AuthContext);

  useEffect(() => {
    console.log("checking validity");
    setFormIsValid(
      emailIsValid && passwordIsValid
    )



    return () => {
      console.log("cleanup");
    }

  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'input_type', val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.value.trim().length>6
    // );

  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'input_type_password', value: event.target.value });

    // setFormIsValid(
    //   emailState.value.includes('@') && event.target.value.trim().length >6
    // )

  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'input_blur' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'input_blur_password' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    auth.onLogin(emailState, passwordState);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
