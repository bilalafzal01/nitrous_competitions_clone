import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const ContactPage = lazy(() => import("../../containers/ContactPage"));

const ContactRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={ContactPage} />
    </Switch>
  );
};

export default ContactRoutes;
