import { useReducer } from "react";

const Form = () => {

    const initialState = {
        username: '',
        password: '',
        email: ''
    }

    const reducerFunction = (state, action) => {
        switch (action.type){
            case 'SET_FIELD':
                return {
                    ...state,
                    [action.field]: action.value
                }
            case 'RESET':
                return initialState;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducerFunction, initialState) 
    const handleChange = (e) => {
        dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };
    return (<>
    <h2>This is another example of UseReducer</h2>
    <form onSubmit={handleSubmit}>
            <input
                name="username"
                value={state.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                name="password"
                type="password"
                value={state.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    </>  );
}



export default Form;<>
<h2>This is another example of UseReducer</h2>

</>