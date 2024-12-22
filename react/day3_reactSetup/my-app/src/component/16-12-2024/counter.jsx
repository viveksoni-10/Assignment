import { useState } from "react";
const Counter = () => {
const [counter, setCounter] = useState(0);
const increament = () =>{
  let newCountValue = counter + 1;
  setCounter(newCountValue);
  console.log("btn click")
}

const decreament = () =>{
  let newCountValue = counter - 1;
  setCounter(newCountValue);
}

  return (
    <div>
      <h1>change me using a button</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
    </div>
  );
};

export default Counter;
