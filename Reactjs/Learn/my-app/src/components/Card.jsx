import React from "react";
function Card(props) {
    return <div className="card">
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
        <h3>{props.email}</h3>
    </div>
}
export default Card;