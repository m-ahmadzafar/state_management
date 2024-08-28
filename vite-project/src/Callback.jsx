import React, { useState, useCallback } from 'react';


const Button = React.memo(({ handleClick }) => {
  console.log('Button rendered');
  return <button onClick={handleClick}>Click me</button>;
});

const Callback = () => {
  const [count, setCount] = useState(0);

  // Memoize the increment function so that it only changes when `count` changes
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
    <h2>UseCallback</h2>
    <p>Basic Concept
Function Memoization: Just like useMemo memoizes the result of a function, useCallback memoizes the function itself.
Dependency Array: The function is only recreated if one of the dependencies in the array changes.
When to Use useCallback:
Prevent Unnecessary Re-renders: When passing functions as props to child components that use React.memo or shouldComponentUpdate to avoid re-rendering unless necessary.
Optimize Performance: When you have an expensive function that shouldn’t be re-created on every render.</p>
      <h3>Count: {count}</h3>
      <Button handleClick={increment} />
    </div>
  );
};

export default Callback;
