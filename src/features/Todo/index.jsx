// import PropTypes from 'prop-types';
import TodoList from "./components/TodoList";
import { useState } from "react";
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "completed",
    },
    {
      id: 2,
      title: "Code",
      status: "new",
    },
    {
      id: 3,
      title: "Sleeping",
      status: "new",
    },
  ];
  const [todoList, setTodolist] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");
  const handleTodoList = (idx) => {
    const newTodo = [...todoList];

    newTodo[idx] = {
      ...newTodo[idx],
      status: newTodo[idx].status === "new" ? "completed" : "new",
    };

    setTodolist(newTodo);
  };
  const handleShowAllTodos = () => {
    setFilterStatus("all");
  };
  const handleShowCompletedTodoList = () => {
    setFilterStatus("completed");
  };
  const handleShowNewTodoList = () => {
    setFilterStatus("new");
  };
  const renderFilterTodo = todoList.filter(
    (todo) => {
     
      return filterStatus === "all" || filterStatus === todo.status}
  );

  return (
    <div>
      <TodoList todoList={renderFilterTodo} onTodoList={handleTodoList} />
      <button onClick={handleShowAllTodos}>Show all todo</button>
      <button onClick={handleShowCompletedTodoList}>Show completed todo</button>
      <button onClick={handleShowNewTodoList}>Show new todo</button>
    </div>
  );
}

export default TodoFeature;
