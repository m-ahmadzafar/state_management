// The useRef hook in React is used to create a mutable reference
// that persists for the lifetime of a component.
// It is commonly used for accessing and interacting with
// DOM elements, storing mutable values, and avoiding re-renders.


import { useRef } from 'react';

function Ref1() {
    const inputRef = useRef(null);
    
    const focusInput = () => {
        inputRef.current.focus();
    };
    
    return (
        <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}
 
export default Ref1;

// useRef is often used to integrate with third-party 
// libraries that require direct DOM manipulation.