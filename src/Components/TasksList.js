import React from "react";
import TaskDetails from "./TaskDetails";

function TasksList({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskDetails key={task.id} task={task} />
      ))}
    </>
  );
}

export default TasksList;
