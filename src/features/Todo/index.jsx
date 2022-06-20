// import PropTypes from 'prop-types';
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Code",
    },
    {
      id: 1,
      title: "Sleeping",
    },
  ];
  return (
    <div>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
