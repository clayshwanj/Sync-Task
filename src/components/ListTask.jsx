import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Done") return task.isDone;
    if (filter === "Not Done") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="Not Done">Not Done</option>
        </select>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
