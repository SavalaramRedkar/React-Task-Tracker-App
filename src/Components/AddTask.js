import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddTask() {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskData = { text, day };
    // console.log(taskData);

    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(taskData),
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="card " style={{ width: "70%", margin: "20px" }}>
      <div className="card-body" style={{ padding: "30px" }}>
        <h5>Add Task</h5>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group">
              <label className="form-label">Task:</label>
              <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="form-control"
                placeholder="Add Task"
                required
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="form-group">
              <label className="form-label">Day and Time:</label>
              <input
                type="text"
                value={day}
                onChange={(event) => setDay(event.target.value)}
                className="form-control"
                placeholder="Add Day and Time"
                required
              />
            </div>
          </div>
          <br />
          <button className="btn btn-success">Add Task</button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
