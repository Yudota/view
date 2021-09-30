import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProvider from "./pages/AddProvider";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/:id/details">
            <Details />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/add-provider">
            <AddProvider />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
