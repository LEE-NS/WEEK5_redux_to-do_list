import React from "react";
import todos, { removeTodo, switchTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <StItem>
      <h3>{todo.title}</h3>
      <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
      <button onClick={() => dispatch(switchTodo(todo.id))}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </StItem>
  );
};

const StItem = styled.li`
  border: 1px solid gray;
  margin: 5px;
  background-color: khaki;
`;

export default Todo;
