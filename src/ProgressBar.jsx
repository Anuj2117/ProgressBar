import { useEffect, useState } from "react"
import "./App.css"
function ProgressBar(){

    const [filled, setFilled]=useState(0);
    const [isRunning,setIsRunnig]=useState(false);
    useEffect(()=>{
       if(filled<100 && isRunning){
       setTimeout(()=> setFilled(prev => prev+2 ) , 100)
       }
    },[filled, isRunning])
    return (
        <>
        <div className="wrapper">

        
        <h1>Progress Bar</h1>
        <div className="main">

           <div className="progressBar"
           style={{
            width:`${filled}%`,
            color:"green"
           }}
           >
           
           </div>
           <p>{filled}%</p>
        </div>
        <button onClick={()=>setIsRunnig(true)}>Start</button>
        </div>
        
        </>
    )
}
export default ProgressBar;