import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AlbumFeature from "./features/Song";
import TodoFeature from "./features/Todo";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <h3>Header</h3>
      <p>
        <NavLink to="/todos"// activeClassName="active-menu"
        >
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/"></Redirect>
        <Redirect from="/post-list/:id" to="/posts/:id" exact></Redirect>
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums/:abc" component={AlbumFeature} />
        <Route component={NotFound}></Route>
      </Switch>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
