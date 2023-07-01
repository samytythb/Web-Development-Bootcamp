import { useState } from "react"

function App(){
  
    const [isMouseOver,setIsMouseOver]=useState(false)
    const [name ,setName]=useState("")
    
    function changeBtn(){
        isMouseOver?
        setIsMouseOver(false):setIsMouseOver(true)
    }
    function handleChange(event){
       setName(event.target.value);
    }
    return <div>
        <h1>Hello{name}</h1>
        <input onChange={handleChange} type="text" placeholder="Enter your name" value={name} />
        <button style={{backgroundColor:isMouseOver ?"black":"white",color:  isMouseOver?"white":"black"}} type="submit" onMouseOver={changeBtn} onMouseOut={changeBtn}>Submit</button>
    </div>
}
export default App;