import react from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from  "../note.js"

function App(){
    return <div><Header/>{notes.map((note)=>{
        return <Note key={note.key} title={note.title} content={note.content}/>
    })}<Footer/></div> 
}
export default App;