import React from "react";
import PropTypes from "prop-types";
import classname from "classnames";
import "./style.scss";
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoList: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoList: null,
};
function TodoList(props) {
  const { todoList, onTodoList } = props;

  const handleTodoList = (idx) => {
    if (!onTodoList) return;
    onTodoList(idx);
  };
  return (
    <ul className="todo-list">
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classname({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoList(idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
