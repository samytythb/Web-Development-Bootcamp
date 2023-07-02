const { useState } = require("react")

function App(){
    const [fullName,setfullName]=useState({
        fName:"",
        lName:"",
    })
   
    function handleChange(event) {
       const {name,value}=event.target;
       setfullName(prevValue=>{
        if (name==="fName"){
           return ({fName:value,
        lName:prevValue.lName})
           }
           if(name==="lName"){
            return ({lName:value,
            fName:prevValue.fName})
           }
       })
    }
return <div>
    <h1>Hello {fullName.fName} {fullName.lName}</h1>
    <form>
        <input name="fName" onChange={handleChange} type="text" placeholder="Enter First Name" 
        value={fullName.fName} />
        <input name="lName" onChange={handleChange} type="text" placeholder="Enter Last Name" value={fullName.lName} />
        <button >Submit</button>
    </form>
</div>
}
export default App;