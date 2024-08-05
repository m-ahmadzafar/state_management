import { useMemo } from "react";


const Memo = () => {

    
return (<>
    <h2>We use useMemo when we have some expensive calculation 
        that we want to execute once in the memo function and
         not on every render. This improves efficiency.

    </h2>
    
    </>  );
}
 

export default Memo
