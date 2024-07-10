import { useRef, useState } from "react";
//if we are only interested in checking once, ref might be better... beacause logging and upadating value on every keystroke isnt needed here
//and if we want to validate it on every keystroke it would be nice using state, if we want to reset after submission state would come in use

const SimpleInput = (props) => {
  const inputChangeRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };

  const inputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    } else {
      setEnteredNameIsValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    console.log(enteredName);
    const enteredValue = inputChangeRef.current.value;
    console.log(enteredValue);
    setEnteredNameIsValid(true);
    setEnteredName("");
  };
  const inputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputChangeRef}
          type="text"
          id="name"
          onBlur={inputBlurHandler}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {inputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
