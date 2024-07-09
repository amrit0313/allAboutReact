import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const showParagraphHandler = useCallback(() => {
    setShowParagraph((prevParagraph) => !prevParagraph);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false} />
      <Button onClick={showParagraphHandler}>Toggle paragraphh</Button>
    </div>
  );
}

export default App;
