import React from "react";
import Image from "./Image.jsx"
function Card(props) {
    return <div>
        <h1>{props.title}</h1>
       <Image img={props.img}/>
        <p>{props.description}</p>
    </div>
}
export default Card;