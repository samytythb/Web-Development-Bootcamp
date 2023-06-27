var count =0;
function increase(){
    count++;
}
function App (){
    return <div><h1>{count}</h1>
    <button onClick={increase}>+</button></div>
}
export default App;