import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTaskStatus, editTask } from "../redux/tasksSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTaskStatus(task.id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
          {task.description}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
};

export default Task;
