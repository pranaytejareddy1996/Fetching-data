import { useState, useEffect } from 'react'

const ClickFunction = () => {
    const [data , setData] = useState(true);
   
    const click = () => {
       setData(false);
   }

   const clickagain = () => {
       setData(true);
   }
    return ( 
        data ? 
        <div><button onClick={click}>click me</button></div> : 
        <div><button onClick={clickagain}>unclick me</button></div>
        // <div>
        //     {data && <button onClick={click}>click me</button>}
        //     {!data && <button onClick={clickagain}>unclick me</button>}
        // </div>
     );
}
 
export default ClickFunction;