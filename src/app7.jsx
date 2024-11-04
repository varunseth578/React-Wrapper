import { useEffect } from "react";

function App(){
    useEffect(function(){
        alert("hi")
    },[])
    return <div>
        hii
    </div>
}
export default App;