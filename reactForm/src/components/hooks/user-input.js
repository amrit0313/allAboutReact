import { useState } from "react";

const UseInput = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";
  const inputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
};

export default UseInput;
