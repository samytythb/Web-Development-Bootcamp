import React, {useState} from 'react';
function App(){
    var now =new Date().toLocaleTimeString();
    const [time,setTime]=useState(now);

function getTime(){
     var current = new Date().toLocaleTimeString();
    
    setTime(current);
}
return <div><h1>{time}</h1>
<button onClick={getTime}>Get Time</button>
</div>
}
export default App;