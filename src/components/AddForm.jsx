import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

const AddForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: Date.now(),
              title: todo,
              isDone: false,
            })
          );
        }}
      >
        추가
      </button>
    </div>
  );
};

export default AddForm;
