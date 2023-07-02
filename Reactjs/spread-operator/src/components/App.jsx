import { useState } from "react";
import TodoItem from "./ToDoItem";
function App(){
    const [inputText,setInputText] =useState("")
    const [liText,setLiText] =useState([]);
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }
    function handleAdd(event) {
        setLiText((prevItem)=>{
            
return[...prevItem,inputText]        })
    }
    return <div><div>
        <h1>To-Do List</h1></div>
        <div>
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={handleAdd}><span>Add</span></button>
        </div>
        <div>
            <ul><TodoItem items={liText}/></ul>
        </div>
        </div>
}
export default App;