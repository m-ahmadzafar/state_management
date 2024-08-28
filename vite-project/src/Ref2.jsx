import { useRef } from "react";

const Ref2 = () => {
    
    const count = useRef(0);

    const increment = () => {
        count.current += 1;
        console.log(count.current);
    };
    
    return (
        <div>
            <p>useRef can be used to keep track of mutable values
            that don't trigger a re-render when they change.</p>
      
        <button onClick={increment}>Increment (Check Terminal)</button>
        </div>
    );

}
 
export default Ref2;