import { useMemo, useState } from "react";

const Memo = () => {
  const [dependency, setDependency] = useState(12); // Initial value for the dependency

  const calculationFunction = () => {
    console.log("calculation was done");
    return dependency * 2; // Example calculation, returns a value
  };

  // useMemo will memoize the calculated value based on the dependency
  const calcValue = useMemo(calculationFunction, [dependency]);

  // Function to handle input change and update the dependency
  const handleInputChange = (e) => {
    setDependency(Number(e.target.value));
  };

  return (
    <>
      <h2>UseMemo</h2>
      <p>
        We use useMemo when we have some expensive calculation that we want to
        execute once in the memo function and not on every render. This improves
        efficiency.
      </p>
      <p>Calculated Value: {calcValue}</p>
      <input
        type="number"
        value={dependency}
        onChange={handleInputChange}
      />
    </>
  );
};

export default Memo;
