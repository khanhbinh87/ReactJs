import "./App.css";
import AlbumFeature from "./features/Song";
import TodoFeature from "./features/Todo";
import {Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h3>Header</h3>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />
      <h3>Footer</h3>
    </div>
  );
}

export default App;
