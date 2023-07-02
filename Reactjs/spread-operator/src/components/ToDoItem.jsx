import { useState } from "react";

function TodoItem(props){
    
    function handleTodoItemClick(){
        
    }
    return props.items.map((item)=>{
        return <div onClick={handleTodoItemClick} ><li>{item}</li></div>
    })
}
export default TodoItem;