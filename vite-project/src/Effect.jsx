import { useEffect, useState } from "react";
import axios from "axios";

const Effect = () => {

    const [data, SetData] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
        SetData(response.data[0].email);
        console.log("Api was called");
        })
    }, []);
    return (
    <>
    <p>hi {data}</p>
    
    </>  );
}
 
export default Effect;