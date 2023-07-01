import { useState } from "react"

function App(){
    const [headingText, setHeadingText]=useState("")
    const [isMouseOver,setIsMouseOver]=useState(false)
    const [name ,setName]=useState("")
    function setMyName(event){
        
        setHeadingText(name)
        event.preventDefault()
    }
    function changeBtn(){
        isMouseOver?
        setIsMouseOver(false):setIsMouseOver(true)
    }
    function handleChange(event){
       setName(event.target.value);
    }
    return <div>
        <h1>Hello {headingText}</h1>
        <form onSubmit={setMyName}>
        <input onChange={handleChange} type="text" placeholder="Enter your name" value={name} />
        <button style={{backgroundColor:isMouseOver ?"black":"white",color:  isMouseOver?"white":"black"}} type="submit" onMouseOver={changeBtn} onMouseOut={changeBtn}>Submit</button>
        </form>
    </div>
}
export default App;