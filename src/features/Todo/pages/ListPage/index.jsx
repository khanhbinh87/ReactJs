// import PropTypes from 'prop-types';
import queryString from "query-string";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useRouteMatch, useHistory } from "react-router-dom";
import TodoList from "../../components/TodoList";

function ListPage(props) {
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
  const location = useLocation();
  const math = useRouteMatch();
  const history = useHistory();
  const [todoList, setTodolist] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || "all");
  }, [location.search]);
  const handleTodoList = (idx) => {
    const newTodo = [...todoList];
    newTodo[idx] = {
      ...newTodo[idx],
      status: newTodo[idx].status === "new" ? "completed" : "new",
    };
    setTodolist(newTodo);
  };
  const handleShowAllTodos = () => {
    const queryParams = { status: "all" };
    const search = queryString.stringify(queryParams);

    history.push({
      pathname: math.path,
      search: search,
    });
  };
  const handleShowCompletedTodoList = () => {
    const queryParams = { status: "completed" };
    const search = queryString.stringify(queryParams);

    history.push({
      pathname: math.path,
      search: search,
    });
  };
  const handleShowNewTodoList = () => {
    const queryParams = { status: "new" };
    const search = queryString.stringify(queryParams);

    history.push({
      pathname: math.path,
      search: search,
    });
  };

  const renderFilterTodo = useMemo(
    () =>
      todoList.filter(
        (todo) => filterStatus === "all" || filterStatus === todo.status
      ),
    [filterStatus, todoList]
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

export default ListPage;
