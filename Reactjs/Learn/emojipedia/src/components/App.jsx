import React from "react";
import Card from "./Card.jsx"
import Infors from "./Infor.js"
function createCard(Infor){
    return <Card key={Infor.key} title={Infor.title} img={Infor.img} description={Infor.description}/>
}
function App(){
    return <div>{Infors.map(createCard)}</div>
    
}
export default App;