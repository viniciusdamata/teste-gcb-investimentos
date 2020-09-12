import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DoctorIndex from "./pages/Doctor/Doctor-index";
import DoctorShow from "./pages/Doctor/Doctor-show";



function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="medicos" />

      <Route path="/medicos" exact component={DoctorIndex} />;
      <Route path="/medicos/:id" exact component={DoctorShow} />
    </Switch>
  );
}

export default Routes;
