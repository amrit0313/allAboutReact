import { useEffect, useState } from "react";
//if we are only interested in checking once, ref might be better... beacause logging and upadating value on every keystroke isnt needed here
//and if we want to validate it on every keystroke it would be nice using state, if we want to reset after submission state would come in use

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const inputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const fromIsValid = false;
  if (enteredNameIsValid) {
    fromIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameIsTouched(false);
  };

  const inputClasses = inputIsInvalid ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onBlur={inputBlurHandler}
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {inputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!fromIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
