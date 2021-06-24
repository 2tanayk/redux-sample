import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement(5))}>-</button><br/>
      {isLogged ? <h3>Secret!</h3>:'Access Denied'}
    </div>
  );
}

export default App;
