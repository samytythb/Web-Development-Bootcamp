import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
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
  return (
    <div>
      <form>
        <input
          className="p-note"
          name="title"
          type="text"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          className="p-note"
          name="content"
          rows="3"
          onChange={handleChange}
          placeholder="Take a note..."
          value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
