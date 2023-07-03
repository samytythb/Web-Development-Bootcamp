import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExp, setExp] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }
  function expand() {
    setExp(true);
  }
  return (
    <div>
      <form>
        {isExp ? (
          <input
            className="p-note"
            name="title"
            type="text"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
            autoFocus="true"
            autoComplete="true"
          />
        ) : null}
        <textarea
          className="p-note"
          name="content"
          rows={isExp ? 3 : 2}
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a note..."
          value={note.content}
        />
        <Zoom in={true}>
          <button onClick={submitNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;
