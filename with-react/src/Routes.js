import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import ResponsiveWeb from "./category/ResponsiveWeb";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' element={<ResponsiveWeb />} />
      </Switch>
    </Router>
  );
}
