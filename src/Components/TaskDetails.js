import React from "react";

function TaskDetails({ task }) {
  const handleDelete = () => {
    fetch("http://localhost:5000/tasks/" + task.id, {
      method: "DELETE",
    }).then(() => {
      console.log("Task Deleted Successfully!");
    });
  };

  return (
    <div className="card " style={{ width: "80%", margin: "20px" }}>
      <div className="card-body">
        <h5 className="card-title">{task.text}</h5>
        <p>{task.day}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskDetails;
