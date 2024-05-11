import { useState } from "react";

function Modal() {
  const mode = "create";
  const editMode = mode === "edit" ? true : false;
  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

  const hanlechange = (e) => {
    console.log("changing");
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3>
          <button>X</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Your task goes here"
            name="title"
            value={""}
            onChange={hanlechange}
          />
          <br />
          <label for="range">Drag to select your current progress</label>
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={hanlechange}
          />
          <input className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
