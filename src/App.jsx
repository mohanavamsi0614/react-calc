import { useState } from 'react'
import './App.css'

function App() {  
  const [sta,setsta]=useState("")
  function cal() {
    setsta(eval(sta))
  }
  return (
    <>
    <input contentEditable={true} onChange={(e)=>setsta(e.target.value)} value={sta}/>
    <h1>IN Direct-Mode</h1>
    <div className='main'>
    <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>+</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>-</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>*</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>/</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>%</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>1</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>2</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>3</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>4</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>5</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>6</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>7</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>8</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>9</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>0</div>
     <div onClick={(e)=>{setsta(sta+e.target.innerHTML)}}>.</div>
     <div onClick={()=>{setsta(sta.substr(0,sta.length-1))}}>del</div>

     <div onClick={()=>{cal()}} id='enter'>Enter</div>
     <div onClick={()=>{setsta("")}}>C</div>   
     </div>  
    </>
  )
}

export default App
