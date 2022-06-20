import "./App.css";
// import AlbumFeature from "./features/Song";
import TodoFeature from "./features/Todo";
function App() {
  return (
    <div className="App">
      <h3>Album</h3>
      <TodoFeature />
      {/* <AlbumFeature /> */}
    </div>
  );
}

export default App;
