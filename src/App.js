import "./App.css";
import Login from "./pages/Login";
import HomeTasks from "./pages/HomeTasks";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" component={HomeTasks} />
    </Switch>
  );
}

export default App;
