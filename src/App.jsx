import React from "react";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import { useSelector } from "react-redux";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ul {
    list-style: none;
  }
  li {
    list-style: none;
  }
`;

const App = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <GlobalStyle />
      <StTitle>Redux to-do list</StTitle>
      <AddForm />
      <TodoList sectionName="working" />
      <TodoList sectionName="done" />
    </>
  );
};

const StTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export default App;
