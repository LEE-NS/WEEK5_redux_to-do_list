import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = ({ sectionName }) => {
  const todos = useSelector((state) => state.todos);

  const working = todos.filter((todo) => todo.isDone === false);
  const done = todos.filter((todo) => todo.isDone === true);

  return (
    <div>
      <StTitle2>{sectionName}</StTitle2>
      <StList>
        {(sectionName === "working" ? working : done).map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </StList>
    </div>
  );
};

const StTitle2 = styled.h2`
  margin: 10px;
  font-size: 20px;
`;

const StList = styled.ul`
  border: 1px solid #000;
  padding: 10px;
`;

export default TodoList;
