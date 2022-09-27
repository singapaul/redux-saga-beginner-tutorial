import React from "react";
import { PropTypes } from "prop-types";

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncredmentifOdd,
  onIncrementAsync,
}) => (
  <div>
    <button onClick={onIncrement}>Increment</button>{" "}
    <button onClick={onIncredmentifOdd}>Increment if odd</button>
    <button onClick={onDecrement}>Decrement</button>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncredmentifOdd: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
};

export default Counter;
