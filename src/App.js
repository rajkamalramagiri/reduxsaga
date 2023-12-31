import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { triggerIncrementRequest } from "./redux/actions/countAction";

const App = () => {
  const countFromRedux = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const { number, loading } = countFromRedux;

  const handleIncrement = () => {
    dispatch(triggerIncrementRequest());
  };

  const handleDecrement = () => {
    alert("decrement functionality is pending yet");
  };

  return (
    <div style={styles.container} className="App">
      <button style={styles.btn} onClick={handleIncrement}>
        +
      </button>
      {loading ? <h1> ...</h1> : <h1 style={styles.m48}>{number}</h1>}
      <button style={styles.btn} onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  btn: { width: 48, height: 48, borderRadius: 24 },
  m48: { margin: 48 },
};

export default App;
