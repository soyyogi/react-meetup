import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes } from "./services/routing";

function App() {
  return (
    <div data-test="app">
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
