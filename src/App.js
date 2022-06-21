import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Song";
import TodoFeature from "./features/Todo";
function App() {
  return (
    <div className="App">
      <h3>Header</h3>
      {/* <p>
        <Link to ="/todos">Todos</Link>
      </p>
      <p>
        <Link to ="/albums">Albums</Link>
      </p> */}
      <p>
        <NavLink
          to="/todos"
          // activeClassName="active-menu"
        >
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
         <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
