import { useState } from "react";
import '../Assests/css/statestyle.css';
const State = () => {
    const [Data,setData]=useState(false)
    function change(){
        setData(!Data);
    }
    return(
        <>
        <div className="gh">
        <div className={Data ? "abcc" : "ba"}></div>
        <div className={Data ? "ba" : "abcc"}></div>
        <button onClick={change}>CLICK HERE</button>
        </div>
        </>
    )
}
export default State;