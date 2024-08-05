import { useState } from "react";

const State = () => {
    const [myList, setmyList] = useState(["Jack","Jill", "John"])
    // const [name, SetName] = useState();
    const [name, SetName] = useState( ()=> "Jack");

    const onAddName = ()=>{
        // myList.push(name); now this just pushs the array
        setmyList([...myList, name]); //here we make a new array and then add name to that new array;
    }
    return ( <>
    
<h3>{myList}
</h3>
<ul>
{ myList.map((name) => (
    <li key={name}>{name}</li>
 ))}
 </ul>

 <p>We know that for strings, numbers and booleans. we dont get the actual value, we get copies. We cant just set it, we need to use the UseState setter.</p>

 <input 
 type="text" 
 placeholder="Add name" 
 value={name}
 onChange={(e)=> SetName(e.target.value)}
 />

 <button
 onClick={onAddName}>
    Add Name
 </button>
 <p>Js manages objects and arrays by reference. This is why nothing happens for  myList.push(name); in the onAddName button method but it does change/update the list when i clear out the input field. </p>
 
 <p>So we understand that a setter not only changes the data but also enqueues the request for a rerender of that thing.</p>
</> );
}
 


export default State;