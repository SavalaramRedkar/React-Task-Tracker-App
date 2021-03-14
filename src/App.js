import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTask from "./Components/AddTask";
import Header from "./Components/Header";
import TasksList from "./Components/TasksList";

function App() {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch data for that resource!");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  });

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              {error && (
                <div
                  className="alert alert-danger"
                  role="alert"
                  style={{ margin: "10px" }}
                >
                  {error}
                </div>
              )}
              {tasks && <TasksList tasks={tasks} />}
            </Route>
            <Route path="/addtask">
              <AddTask />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
