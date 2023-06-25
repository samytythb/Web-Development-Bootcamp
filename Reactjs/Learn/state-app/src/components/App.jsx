var isDone = true;
function Strike(){
    isDone?isDone=false:isDone=true;
}
console.log(isDone);
function App(){
    const strikeThrought ={textDecoration:"line-through"}
    return <div><p style={isDone?strikeThrought:null}>Love Minh Duc</p>
    <button  onClick={Strike} >Change</button></div>

}
export default App;