import { useEffect, useState } from "react";

function App(){
    const [count,setCount]= useState(0)
    useEffect(()=>{
        alert(count);
    },[count])
    return <div>
      <button onClick={()=>{setCount(count++);}}>Increase count</button>
    </div>
}
export default App;