import { useReducer } from "react";

const Reducer = () => {


    const initialState = { count: 0 };
    const reducerFunction = (state, action) => {
        switch (action.type){
            case 'INCREMENT':
                return { count: state.count + 1};
            case 'DECREMENT':
                return{count: state.count -1};
            case 'RESET':
                return {count: 0};
            default:
                return state;
        }
    }

    const [state, dispatch]= useReducer(reducerFunction, initialState )
    return(
        <>
        <h2>USE REDUCER</h2>
    <p>We use useReducer as an alt to useState when there are more state variables with complex logic or they need to be updated together.</p>
    <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
        </>
// lets say we want to have a state and we want actions associated with that state, these are the params of the reducer function.
// the useReducer function itself has the reducer function we defined and the initialState.   
    )
}
export default Reducer;