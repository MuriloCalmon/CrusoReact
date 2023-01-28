import P from "prop-types";
import React, { useMemo, useState } from "react";
import { useCallback } from "react";
import "./App.css";

//React memo memoria uma função
const Button = React.memo(({ incrementButton }) => {
  console.log("Filho renderizou");
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.prototype = {
  incrementButton: P.func,
};

function App() {
  const [count, setCount] = useState(0);

  //utilizando useCallback para 'guardar a função' incrementCounter, e utilizando funcção de callback dentro do UseState (parametro 'c') para tirar a dependência da constante "count"
  const incrementCounter = useCallback((num) => {
    console.log("Pai renderizou");
    setCount((c) => c + num);
  }, []);

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>C1: {count}</h1>
      <Button incrementButton={incrementCounter}></Button>
    </div>
  );
}

export default App;
